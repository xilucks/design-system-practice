import * as CheckBoxPrimitive from '@/core/primitives/checkbox/checkbox-primitive.tsx';
import type { ReactNode } from 'react';

interface CheckboxProps {
  labelText: ReactNode;
}

export default function Checkbox({ labelText }: CheckboxProps) {
  return (
    <CheckBoxPrimitive.Root id={'check-box-1'}>
      <CheckBoxPrimitive.Indicator>checked!</CheckBoxPrimitive.Indicator>
      <label htmlFor={'check-box-1'}>{labelText}</label>
    </CheckBoxPrimitive.Root>
  );
}
