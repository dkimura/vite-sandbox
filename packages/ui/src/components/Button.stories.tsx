import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
}
