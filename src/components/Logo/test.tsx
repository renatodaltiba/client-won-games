import { screen } from '@testing-library/react'
import 'jest-styled-components'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('deve renderizar o componente branco por padrão', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('deve renderizar o componente com cor preta se a mesma for passada', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('deve renderizar o componente com o tamanho grande', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('deve renderizar o componente com o tamanho normal por padrão', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('deve renderizar o componente com o tamanho grande mas sem o texto se o hideOnMobile estiver como verdadeiro', () => {
    renderWithTheme(<Logo hideOnMobile />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
