import React, { type ReactNode } from 'react';

export interface FlexProps {
  gap?: number;
  alignContent?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  height?: string;
  width?: string;

  children?: ReactNode;
}

const Flex: React.FC<FlexProps> = ({
  gap = 3,
  alignContent = 'stretch',
  alignItems = 'stretch',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  height = 'fit-content',
  width = 'fit-content',
  children,
}) => {
  const flexContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: `${gap}px`,
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    height,
    width,
  };

  return <div style={flexContainerStyle}>{children}</div>;
};

export default Flex;
