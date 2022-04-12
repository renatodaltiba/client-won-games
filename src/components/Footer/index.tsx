import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href="https://www.instagram.com/won-games">Instagram</a>
          <a href="https://www.instagram.com/won-games">Instagram</a>
          <a href="https://www.instagram.com/won-games">Instagram</a>
          <a href="https://www.instagram.com/won-games">Instagram</a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Store</a>
          </Link>
          <Link href="/">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum dolor</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
