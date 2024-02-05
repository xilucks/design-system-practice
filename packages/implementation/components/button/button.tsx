import ButtonPrimitive from '@/core/primitives/button/button-primitive.tsx';
import type { ReactNode } from 'react';

interface ButtonProps {
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
  return (
    <ButtonPrimitive
      disabled={disabled}
      className={color}
      type={type}
      ariaLabel={ariaLabel}
      onClick={onClick}
    >
      {children}
    </ButtonPrimitive>
  );
}
