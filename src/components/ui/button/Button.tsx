import type { ButtonPropsType } from "./Button.contract";

export default function Button({buttonName, className='', type, disabled}: ButtonPropsType) {
  return (
    <button
      className={`w-full cursor-pointer flex items-center border rounded-lg p-2 justify-center ${className}`}
      type={type}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}
