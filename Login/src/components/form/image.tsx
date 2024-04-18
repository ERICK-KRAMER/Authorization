export interface IImage{
  img?: {
    name: string,
    url:  string
  }
  isRegister: boolean
}

export const ImageComponent = ({img, isRegister}: IImage) => {
  return (
    <div className={`h-[600px] hidden md:block w-1/2 bg-indigo-500 py-10 px-10 transition duration-500 ${isRegister ? "translate-x-full" : ""}`}>
      <img src={img?.url} alt={img?.name} />
    </div>
  )
}