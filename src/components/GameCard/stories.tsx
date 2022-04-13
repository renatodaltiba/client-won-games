import { Meta, Story } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
Default.args = {
  title: 'The Witcher 3: Wild Hunt',
  developer: 'CD PROJEKT RED',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 59,90'
}

Default.argTypes = {
  onFav: { action: 'clicked' }
}

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbonLabel: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
  title: 'The Witcher 3: Wild Hunt',
  developer: 'CD PROJEKT RED',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 59,90'
}

WithRibbon.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
