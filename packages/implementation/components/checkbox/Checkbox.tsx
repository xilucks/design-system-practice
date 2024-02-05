import * as CheckBoxPrimitive from '@/core/primitive/checkbox/checkbox-primitive.tsx';

export default function Checkbox() {
  return (
    <CheckBoxPrimitive.Root id={'check-box-1'}>
      <CheckBoxPrimitive.CheckboxIndicator>
        <input type={'checkbox'} />
      </CheckBoxPrimitive.CheckboxIndicator>
      <label htmlFor={'check-box-1'}>demo-checkbox</label>
    </CheckBoxPrimitive.Root>
  );
}
