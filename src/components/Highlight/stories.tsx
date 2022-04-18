import { Meta, Story } from '@storybook/react'
import Highlight, { HighLightProps } from '.'
import item from './mock'
export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

export const Default: Story<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  title: 'Read Dead it`s back',
  subtitle: 'The best game ever',
  buttonLabel: 'Buy now',
  buttonLink: 'https://rocketseat.com.br',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png'
}
