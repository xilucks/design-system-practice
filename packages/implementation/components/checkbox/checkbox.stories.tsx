import { useState } from 'react';
import Checkbox, { type CheckboxProps } from './checkbox';
import Button from '../button/Button';
import type { Meta } from '@storybook/react';
import Flex from '../../layouts/flex/flex';

const meta = {
  title: 'implementation/checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',

    componentSubtitle: 'checkbox',
    docs: {
      description: {
        component: 'checkbox는 체크 여부를 판단하는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {
    defaultChecked: {
      description: '최초 체크가 되어있는지의 여부를 지정합니다.',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: '체크박스의 사용 가능 여부를 지정합니다.',
      control: {
        type: 'boolean',
      },
    },
    required: {
      description: '필수적으로 체크되어야 하는 지에 대한 여부를 지정합니다.',
      control: {
        type: 'boolean',
      },
    },
    name: {
      description: 'checkbox의 name을 지정합니다.',
      control: {
        type: 'text',
      },
    },
    value: {
      description: 'checkbox의 value을 지정합니다.',
      control: {
        type: 'text',
      },
    },
    labelText: {
      description: 'checkbox의 label에 들어갈 text를 지정합니다.',
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

const Template = (args: CheckboxProps) => <Checkbox {...args} />;
const RequiredTemplate = (args: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    if (args.required && !isChecked) {
      // @ts-ignore
      alert('체크박스를 선택해주세요!');
    } else {
      // @ts-ignore
      alert('폼 제출 성공!');
    }
  };

  return (
    <Flex gap={10}>
      <Checkbox
        name="test1"
        value="test1"
        labelText="test1"
        onChange={() => setIsChecked(!isChecked)}
        required={args.required}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
      >
        제출
      </Button>
    </Flex>
  );
};

export const DefaultTextbox = Template.bind({});
// @ts-ignore
DefaultTextbox.args = {
  name: 'default-checkbox',
  value: 'checkbox1',
  labelText: 'Default Checkbox',
};

export const DisabledTextbox = Template.bind({});
// @ts-ignore
DisabledTextbox.args = {
  name: 'disabled-checkbox',
  value: 'checkbox1',
  labelText: 'Disabled Checkbox',
  disabled: true,
};

export const RequiredTextbox = RequiredTemplate.bind({});
// @ts-ignore
RequiredTextbox.args = {
  name: 'required-checkbox',
  value: 'checkbox1',
  labelText: 'Required CheckBox',
  required: true,
  onChange: () => {},
};
