import { Form } from "./components/form";
// import { LoginUser, Register } from "./api";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
// import { useForm, SubmitHandler } from "react-hook-form";

export default function App() {
  const [isRegister, setIsRegister] = useState(false);

  const handleChangeLoginRegister = () => {
    setIsRegister(prev => !prev);
  }

  return (
    <>
      <Form.Root>
        <ArrowUpRight className={`absolute z-20 right-2 top-2 rounded-full w-10 h-10 cursor-pointer hover:bg-indigo-500 
          transition-colors duration-500 hover:text-white ${isRegister ? "text-white" : ""}`} onClick={handleChangeLoginRegister} />
        <Form.Image isRegister={isRegister} />
        <Form.Container isRegister={isRegister}>
          {isRegister ? (
            <>
              <Form.Input label="First name" placeholder="John" type="text" />
              <Form.Input label="Last name" placeholder="Smith" type="text" />
              <Form.Input label="Email" placeholder="johnsmith@example.com" type="text" />
              <Form.Input label="Password" type="password" placeholder="*************" />
              <Form.Input label="Confirm-password" type="password" placeholder="*************" />
              <Form.Button text={isRegister ? "Register" : "Login"} />
            </>
          ) : (
            <>
              <Form.Input label="Email" placeholder="johnsmith@example.com" type="text" />
              <Form.Input label="Password" type="password" placeholder="*************" />
              <Form.Button text={isRegister ? "Register" : "Login"} />
            </>
          )}
        </Form.Container>
      </Form.Root>
    </>
  )
}
