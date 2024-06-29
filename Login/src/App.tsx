import { Form } from "./components/form";
// import { LoginUser, Register } from "./api";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Auth } from "./api/index";

interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILoginForm {
  email: string;
  password: string;
}

export default function App() {
  const [isRegister, setIsRegister] = useState(false);

  const handleChangeLoginRegister = () => {
    setIsRegister(prev => !prev);
  }

  const { register, handleSubmit } = useForm<IRegisterForm | ILoginForm>();

  const onSubmit: SubmitHandler<IRegisterForm | ILoginForm> = async (data) => {
    const { register, singIn } = new Auth();
    if (isRegister) {
      const response = await register(data as IRegisterForm);
      console.log(response);
    } else {
      const response = await singIn(data as ILoginForm);
      console.log(response);
    }
  }

  return (
    <>
      <Form.Root>
        <ArrowUpRight className={`absolute z-20 right-2 top-2 rounded-full w-10 h-10 cursor-pointer hover:bg-indigo-500 
          transition-colors duration-500 hover:text-white`
        } onClick={handleChangeLoginRegister} />
        <Form.Image isRegister={isRegister} />
        {
          isRegister ? (
            <>
              <Form.Container isRegister={isRegister} onSubmit={handleSubmit(onSubmit)} >
                <Form.Input label="First name" placeholder="John" type="text" {...register('firstName')} />
                < Form.Input label="Last name" placeholder="Smith" type="text" {...register('lastName')} />
                < Form.Input label="Email" placeholder="johnsmith@example.com" type="text" {...register('email')} />
                < Form.Input label="Password" type="password" placeholder="*************" {...register('password')} />
                < Form.Input label="Confirm-password" type="password" placeholder="*************" {...register('confirmPassword')} />
                < Form.Button text="Register" />
              </Form.Container>
            </>
          ) : (
            <>
              <Form.Container isRegister={isRegister} onSubmit={handleSubmit(onSubmit)} >
                <Form.Input label="Email" placeholder="johnsmith@example.com" type="text" {...register('email')} />
                < Form.Input label="Password" type="password" placeholder="*************" {...register('password')} />
                < Form.Button text="Login" />
              </Form.Container>
            </>
          )
        }
      </Form.Root>
    </>
  )
}
