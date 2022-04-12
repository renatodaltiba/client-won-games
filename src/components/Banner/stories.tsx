import { Meta, Story } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>Crashlands</strong></p> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

Default.parameters = {
  layout: 'fullscreen'
}

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
WithRibbon.parameters = {
  layout: 'fullscreen'
}

WithRibbon.args = {
  ribbonLabel: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
