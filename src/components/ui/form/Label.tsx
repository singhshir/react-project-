import type { FormLabelPropsType } from "./Form.contract";

export default function FormLabel({htmlFor='', className='', children}: FormLabelPropsType) {
  return (
    <label htmlFor={htmlFor} className={`w-1/4 font-semibold text-lg ${className}`}>
      {children}
    </label>
  );
}
