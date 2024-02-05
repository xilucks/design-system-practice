import Checkbox from './checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'implementation/checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'checkbox는 체크 여부를 판단하는 컴포넌트 입니다.',
    docs: {
      description: {
        component: 'checkbox 설명',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    labelText: 'default',
  },
};
