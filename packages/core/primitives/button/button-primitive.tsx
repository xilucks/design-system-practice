import type { ReactNode } from 'react';

interface ButtonPrimitiveProps {
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
