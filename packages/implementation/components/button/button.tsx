import ButtonPrimitive from '@/core/primitives/button/button-primitive.tsx';
import type { ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  color?: 'primary' | 'red' | string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  children?: ReactNode;
}
export default function Button({
  disabled = false,
  color = 'primary',
  type,
  onClick,
  children,
}: ButtonProps) {
  return (
    <ButtonPrimitive
      disabled={disabled}
      className={color}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonPrimitive>
  );
}
