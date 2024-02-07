'use client';

import ButtonPrimitive from '@/core/primitives/button/button-primitive.tsx';
import type { ReactNode } from 'react';
import './Button.scss';

export interface ButtonProps {
  disabled?: boolean;
  color?: 'primary' | 'red' | string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export default function Button({
  disabled = false,
  color = 'primary',
  type = 'submit',
  ariaLabel = 'button',
  onClick,
  children,
}: ButtonProps) {
  const buttonClassName = `button ${color}`;

  return (
    <ButtonPrimitive
      disabled={disabled}
      className={buttonClassName}
      type={type}
      ariaLabel={ariaLabel}
      onClick={onClick}
    >
      {children}
    </ButtonPrimitive>
  );
}
