// Checkbox.tsx

'use client';

import * as CheckBoxPrimitive from '@/core/primitives/checkbox/checkbox-primitive.tsx';
import type { ReactNode } from 'react';
import { useState } from 'react';
import './checkbox.scss';

interface CheckboxProps {
  onCheckedChange?: () => void;
  labelText: ReactNode;
}

export default function Checkbox({ onCheckedChange = () => {}, labelText }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="checkbox-container">
      <CheckBoxPrimitive.Root
        className="checkbox-root"
        id="check-box-1"
        checked={checked}
        onCheckedChange={() => {
          setChecked(!checked);
          onCheckedChange();
        }}
      >
        <CheckBoxPrimitive.Indicator className="checkbox-indicator">
          check!
        </CheckBoxPrimitive.Indicator>
      </CheckBoxPrimitive.Root>
      <label htmlFor="check-box-1">{labelText}</label>
    </div>
  );
}
