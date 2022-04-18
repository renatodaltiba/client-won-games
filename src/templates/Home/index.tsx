import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighLightProps } from 'components/Highlight'
import Menu from 'components/Menu'
import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighLightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighLight: HighLightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighLight: HighLightProps
}

const Home = ({
  banners,
  freeGames,
  freeHighLight,
  mostPopularGames,
  mostPopularHighLight,
  newGames,
  upcommingGames,
  upcommingHighLight,
  upcommingMoreGames
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>
    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </S.SectionMostPopular>
    </Container>

    <Container>
      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} color="white" />
        <Highlight {...upcommingHighLight} />
        <GameCardSlider items={upcommingMoreGames} color="white" />
      </S.SectionUpcoming>
    </Container>

    <Container>
      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>

        <Highlight {...freeHighLight} />
        <GameCardSlider items={freeGames} color="white" />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
