import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('deve renderizar o componente', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Open Shopping Cart/i)).toBeInTheDocument()
  })

  it('deve renderizar o componente abrindo ou fechando', () => {
    renderWithTheme(<Menu />)

    // selecionar o nosso menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    // verificar se o menu está fechado
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    })

    // clicar no botao de menu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({
      opacity: 1
    })

    // clicar no botao de menu

    fireEvent.click(screen.getByLabelText(/Close Menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    })
  })

  it('deve mostrar a caixa de registro quando desconectado', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
  })
  it('deve renderizar o sem a parte de registro e com todos os dados do usuario', () => {
    renderWithTheme(<Menu username="John doe" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/My account/i)).toBeInTheDocument()
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
  })
})
