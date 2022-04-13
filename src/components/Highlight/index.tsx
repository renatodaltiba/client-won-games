import Button from 'components/Button'
import * as S from './styles'

export type AligmentProps = 'left' | 'right'
export type HighLightProps = {
  title: string
  subtitle: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  alignment?: AligmentProps
}

const Highlight = ({
  subtitle,
  title,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighLightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
