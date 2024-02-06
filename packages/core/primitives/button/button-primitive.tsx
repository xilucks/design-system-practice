import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonPrimitiveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string;
  children: ReactNode;
}

export default function ButtonPrimitive({ ariaLabel, children, ...props }: ButtonPrimitiveProps) {
  return (
    <button
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
