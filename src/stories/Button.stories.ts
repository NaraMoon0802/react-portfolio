import type { Meta, StoryObj } from '@storybook/react';

import { ActionButton } from './actionButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: ActionButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    action: {
      control: 'action',
      description: 'button action'
    },
    size: {
      control: 'text size'
    }
  },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Edit: Story = {
  args: {
    action: 'edit',
  },
};

export const Save: Story = {
  args: {
    action: 'save',
  },
};

export const Delete: Story = {
  args: {
    action: 'delete',
  },
}

export const Large: Story = {
  args: {
    action: 'edit',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    action: 'edit',
    size: 'small',
  },
};
