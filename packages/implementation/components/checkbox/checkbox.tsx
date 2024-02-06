'use client';

import * as CheckBoxPrimitive from '@/core/primitives/checkbox/checkbox-primitive.tsx';
import { useState, type ReactNode } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import './checkbox.scss';

interface CheckboxProps {
  defaultChecked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  required?: boolean;
  name: string;
  value: string;
  labelText: ReactNode;
}

export default function Checkbox({
  defaultChecked = false,
  onChange = () => {},
  disabled = false,
  required = false,
  name,
  value,
  labelText,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <CheckBoxPrimitive.Root
        className="checkbox-root"
        id="check-box-1"
        defaultChecked={defaultChecked}
        checked={isChecked}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        onCheckedChange={() => {
          onChange();
          handleCheckBoxChange();
        }}
      >
        <CheckBoxPrimitive.Indicator className="checkbox-indicator">
          <CheckIcon />
        </CheckBoxPrimitive.Indicator>
      </CheckBoxPrimitive.Root>
      <label htmlFor="check-box-1">{labelText}</label>
    </div>
  );
}
