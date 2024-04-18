// FormContainer.tsx
import React, { ReactNode } from 'react';

type FormContainerProps = {
  children: ReactNode[];
};

export const FormContainerLogin = ({ children }: FormContainerProps) => {
  return (
    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-gray-900">Login</h1>
        <p>Enter your information to Login</p>
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
