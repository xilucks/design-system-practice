import React from 'react';
import Flex, { type FlexProps } from './flex';
import { type Meta } from '@storybook/react';

export default {
  title: 'layouts/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Flex 컴포넌트는 컴포넌트를 세로 혹은 가로로 정렬할 때 사용됩니다.',
    docs: {
      description: {
        component: '설정에 따라 정렬 방향, 간격 등을 조절할 수 있습니다.',
      },
    },
  },
  argTypes: {
    gap: {
      description: '요소 사이의 간격을 지정합니다.',
      defaultValue: 5,
      control: {
        type: 'number',
        min: 0,
      },
    },
    alignContent: {
      description: '여러 줄의 요소 간의 정렬 방식을 지정합니다.',
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
      control: {
        type: 'select',
      },
    },
    alignItems: {
      description: '각 요소의 수직 정렬 방식을 지정합니다.',
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      control: {
        type: 'select',
      },
    },
    flexDirection: {
      description: 'flex 컨테이너의 주축을 설정합니다.',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: {
        type: 'select',
      },
    },
    flexWrap: {
      description: 'flex 컨테이너의 여러 줄 묶음을 생성할지 여부를 설정합니다.',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      control: {
        type: 'select',
      },
    },
    justifyContent: {
      description: 'flex 컨테이너의 주축을 따라 정렬 방식을 설정합니다.',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: {
        type: 'select',
      },
    },
  },

  tags: ['autodocs'],
} as Meta;

const Template = (args) => <Flex {...args} />;

export const Gap5AndRowWrapStart = Template.bind({});
Gap5AndRowWrapStart.args = {
  gap: 5,
  alignContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  children: (
    <>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#add8e6' }}></div>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#f08080' }}></div>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#90ee90' }}></div>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#fafad2' }}></div>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#ffb6c1' }}></div>
    </>
  ),
};

export const Gap10AndColumnWrapEnd = Template.bind({});
Gap10AndColumnWrapEnd.args = {
  gap: 10,
  alignContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  children: (
    <>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#add8e6' }}></div>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#f08080' }}></div>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#90ee90' }}></div>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#fafad2' }}></div>
      <div style={{ height: '50px', width: '50px', backgroundColor: '#ffb6c1' }}></div>
    </>
  ),
};
