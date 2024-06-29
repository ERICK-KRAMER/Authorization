import { ReactNode } from 'react';

type FormContainerProps = {
  children: ReactNode;
  isRegister: boolean;
};

export const FormContainer = ({ children, isRegister }: FormContainerProps) => {
  return (
    <form className={`w-full md:w-1/2 py-10 px-5 md:px-10 flex flex-col h-[600px] justify-center ${isRegister ? 'md:-translate-x-full transition duration-500' : 'transition duration-500'}`}>
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-gray-900">{isRegister ? 'REGISTER' : "LOGIN"}</h1>
        <p>Enter your information to {isRegister ? 'Register' : 'Login'} </p>
      </div>
      <div className='w-full flex justify-center items-center flex-col gap-2 mx-auto'>
        {children}
      </div>
    </form>
  );
};
