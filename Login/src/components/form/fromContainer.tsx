import React, { ReactNode } from 'react';

type FormContainerProps = {
  children: ReactNode[];
  isRegister: boolean;
};

export const FormContainer = ({ children, isRegister }: FormContainerProps) => {
  return (
    <div className={`w-full md:w-1/2 py-10 px-5 md:px-10 flex flex-col h-[600px] justify-center ${isRegister ? 'md:-translate-x-full transition duration-500' : 'transition duration-500'}`}>
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-gray-900">{isRegister ? 'REGISTER' : "LOGIN"}</h1>
        <p>Enter your information to {isRegister ? 'Register' : 'Login'} </p>
      </div>
      <div>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex -mx-3">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
 