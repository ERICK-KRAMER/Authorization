import img from "../../../public/6310507.jpg";

export interface IImage {
  isRegister: boolean
}

export const ImageComponent = ({ isRegister }: IImage) => {
  return (
    <div className={`h-[600px] hidden md:block w-1/2 bg-indigo-500 transition duration-500 z-10 ${isRegister ? "translate-x-full" : ""}`}>
      <img src={img} alt={'Image Authorization'} className="z-10 w-full h-full bg-cover object-cover" />
    </div>
  )
}

