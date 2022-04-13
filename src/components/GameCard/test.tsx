import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'The Witcher 3: Wild Hunt',
  developer: 'CD PROJEKT RED',
  img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1o0i.jpg',
  price: 'R$ 59,90'
}

describe('<GameCard />', () => {
  it('deve renderizar corretamente', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('deve renderizar o componente com o preço no rotulo', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 59,90')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('deve renderizar o componente com o preço promocional no rotulo', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 59,90')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('deve renderizar o componente favoritado', () => {
    renderWithTheme(
      <GameCard {...props} promotionalPrice="R$ 15,00" favorite />
    )

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('deve chamar o método onFav quando o favorito é clicado', () => {
    const onFav = jest.fn()

    renderWithTheme(
      <GameCard {...props} promotionalPrice="R$ 15,00" favorite onFav={onFav} />
    )

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('deve renderizar o componente com o ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbonLabel="20% OFF"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% OFF/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
