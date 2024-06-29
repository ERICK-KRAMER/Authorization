import { ComponentProps, forwardRef } from "react";

export interface InputProps extends ComponentProps<'input'> {
  label: string;
  className?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  className,
  error,
  type,
  ...rest
}, ref) => {
  return (
    <div className="w-full p-1 flex flex-col">
      <label htmlFor={type} className="text-xs font-semibold px-1">{label}</label>
      <input
        ref={ref}
        name={type}
        type={type}
        className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${className}`}
        {...rest}
      />
    </div>
  )
});

export { Input };
