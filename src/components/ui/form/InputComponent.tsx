import type { TextInputComponentPropsType } from "./Form.contract";
import FormLabel from "./Label";

export default function TextInputComponent ({htmlFor='', label, type='text', name='', placeholder='', labelClass='', inputClass='', onChange}: TextInputComponentPropsType) {
  return (
    <div className="w-full flex items-center">
      <FormLabel htmlFor={htmlFor} className={labelClass}>
        {label}
      </FormLabel>

      <div className="w-3/4 flex flex-col">
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full p-2
          border border-gray-800 rounded-md ${inputClass}`}
        />
      </div>
    </div>
  );
};
