import { screen } from '@testing-library/react'
import { AddShoppingCart } from 'styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button />', () => {
  it('deve renderizar o componente no tamanho médio por padrão', () => {
    const { container } = renderWithTheme(<Button>Won Games</Button>)

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('deve renderizar o componente no tamanho pequeno', () => {
    renderWithTheme(<Button size="small">Won Games</Button>)

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
  it('deve renderizar o componente no tamanho grande', () => {
    renderWithTheme(<Button size="large">Won Games</Button>)

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('deve renderizar o componente com o tamanho total do container', () => {
    renderWithTheme(<Button fullWidth>Won Games</Button>)

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('deve renderizar o componente com a versão com ícone', () => {
    renderWithTheme(<Button fullWidth>Won Games</Button>)

    expect(screen.getByRole('button', { name: /won games/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('deve renderizar o componente com a versão com ícone e texto', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('deve renderizar o componente com a versão com ícone', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
