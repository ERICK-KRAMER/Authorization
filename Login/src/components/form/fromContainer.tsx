import { ComponentProps, ReactNode, forwardRef } from 'react';

interface FormContainerProps extends ComponentProps<'form'> {
  children: ReactNode;
  isRegister: boolean;
};

const FormContainer = forwardRef<HTMLFormElement, FormContainerProps>((props, ref) => {
  return (
    <form className={`w-full md:w-1/2 py-10 px-5 md:px-10 flex flex-col h-[600px] justify-center ${props.isRegister ? 'md:-translate-x-full transition duration-500' : 'transition duration-500'}`} {...props} ref={ref}>
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-gray-900">{props.isRegister ? 'REGISTER' : "LOGIN"}</h1>
        <p>Enter your information to {props.isRegister ? 'Register' : 'Login'} </p>
      </div>
      <div className="flex flex-col w-full">{props.children}</div>
    </form>
  );
});

export { FormContainer };
