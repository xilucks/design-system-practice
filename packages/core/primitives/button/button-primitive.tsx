import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonPrimitiveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children: ReactNode;
}

export default function ButtonPrimitive({ label, children, ...props }: ButtonPrimitiveProps) {
  return (
    <button
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
}
