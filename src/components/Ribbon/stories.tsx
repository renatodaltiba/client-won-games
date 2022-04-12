import { Meta, Story } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args}>Best Seller</Ribbon>
  </div>
)
