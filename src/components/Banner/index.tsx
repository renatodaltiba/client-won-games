import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbonLabel?: string
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title,
  ribbonColor = 'primary',
  ribbonSize = 'normal',
  ribbonLabel
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbonLabel && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbonLabel}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
