import Button, { type ButtonProps } from './index';
import type { Meta } from '@storybook/react';

import './Button.scss';

const meta: Meta = {
  title: 'implementation/button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: '버튼 컴포넌트는 클릭 가능한 요소를 나타냅니다.',
    docs: {
      description: {
        component: '버튼 설명',
      },
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'red'],
      },
    },
  },

  tags: ['autodocs'],
};

export default meta;

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  color: 'primary',
  children: 'Primary Index',
};

export const Error = Template.bind({});
// @ts-ignore
Error.args = {
  color: 'error',
  children: 'Error Index',
};

export const Disabled = Template.bind({});
// @ts-ignore
Disabled.args = {
  disabled: true,
  children: 'Disabled Index',
};
