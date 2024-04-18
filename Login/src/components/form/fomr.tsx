export interface IFormProps {
  children: React.ReactNode;
}
export const Formm = ({children}: IFormProps) => {

  return(
    <main className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
        <div className="md:flex w-full relative">
          {children}
        </div>
      </div>
    </main>   
  )
}

