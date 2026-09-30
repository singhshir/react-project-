import { useController, type FieldValues } from "react-hook-form";
import type { TextInputComponentPropsType } from "./Form.contract";
import FormLabel from "./Label";

export default function TextInputComponent<T extends FieldValues> ({errMsg = "",
  htmlFor = "",
  label,
  type = "text",
  name,
  placeholder = "",
  labelClass = "",
  inputClass = "",
  control,
}: TextInputComponentPropsType<T>) {
  const { field } = useController({
    name: name,
    control: control,
  })
  return (
    <div className="w-full flex items-center">
      <FormLabel htmlFor={htmlFor} className={labelClass}>
        {label}
      </FormLabel>

      <div className="w-3/4 flex flex-col">
        <input
          type={type}
          {...field}
          placeholder={placeholder}
          className={`w-full p-2
          border border-gray-800 rounded-md ${inputClass}`}
          />
          {errMsg && <p className="text-sm text-red-500 mt-1">{errMsg}</p>}
      </div>
    </div>
  );
};
