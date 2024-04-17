import { ButtonHTMLAttributes } from "react"

export interface IButtonSubmit extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string
}
export const ButtonSubmit = ({text, ...rest}: IButtonSubmit) => {
  return(
    <div className="w-full px-3 mb-5">
      <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" {...rest}>{text}</button>
    </div>
  )
}