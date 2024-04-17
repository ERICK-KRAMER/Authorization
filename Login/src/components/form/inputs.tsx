import { InputHTMLAttributes } from "react";

export interface IIpunt extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const Input = ({ label, className, ...rest }: IIpunt) => {
  return (
    <div className="w-full px-3 mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">{label}</label>
        <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
            </div>
            <input type="email" className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${className}`} {...rest}/>
        </div>
    </div>
  );
};
