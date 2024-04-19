import { Form } from "./components/form";
import { LoginUser, Register } from "./api";
import { useRef, useState } from "react";
import { LoginSchema, RegisterSchema } from "./helpers/validation";
import { z } from "zod";
import { ArrowUpRight } from "lucide-react";
import img from "../public/6310507.jpg"

export default function App() {

  const [errorMessage, setErrorMessage] = useState(false);
  const [errorMessageText, setErrorMessageText] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  const emailValue = email.current?.value ?? '';
  const passwordValue = password.current?.value ?? '';
  const firstNameValue = firstName.current?.value ?? '';
  const lastNameValue = lastName.current?.value ?? '';
  const confirmPasswordValue = confirmPassword.current?.value ?? '';

  async function handlerLogin() {

    try {
      setErrorMessage(false);
      setErrorMessageText("");

      LoginSchema.parse({
        email: emailValue,
        password: passwordValue,
      });

      await LoginUser({ email: emailValue, password: passwordValue })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = error.errors.map(err => setErrorMessageText(err.message));
        console.log(validationErrors);
        setErrorMessage(true);
      } else {
        console.log(error);
        alert("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.");
      }
    }
  }

  async function handlerRegister() {

    try {
      setErrorMessage(false);
      setErrorMessageText("");

      RegisterSchema.parse({
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue,
        confirmPassword: confirmPasswordValue,
      });

      await Register({
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue,
      })
        .then(res => console.log(res))
        .catch(error => console.log(error));

    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = error.errors.map(err => setErrorMessageText(err.message));
        console.log(validationErrors);
        setErrorMessage(true);
      } else {
        console.log(error);
        alert("Ocorreu um erro ao tentar registrar. Por favor, tente novamente mais tarde.");
      }
    }
  }

  const handleChangeLoginRegister = () => {
    setIsRegister(prev => !prev);
  }

  const img1 = {
    url: img,
    alt: "Login"
  }

  return (
    <>
      <Form.Root>
        <ArrowUpRight className={`absolute z-20 right-2 top-2 rounded-full w-10 h-10 cursor-pointer hover:bg-indigo-500 transition-colors duration-500 hover:text-white ${isRegister ? "text-white" : ""}`} onClick={handleChangeLoginRegister} />
        <Form.Image isRegister={isRegister} img={img1} />
        <Form.Container isRegister={isRegister}>
          {isRegister ? (
            <>
              <Form.Input label="First name" placeholder="John" inputRef={firstName} />
              <Form.Input label="Last name" placeholder="Smith" inputRef={lastName} />
            </>
          ) : null}
          <Form.Input label="Email" placeholder="johnsmith@example.com" inputRef={email} />
          <Form.Input label="Password" type="password" placeholder="*************" inputRef={password} />
          {isRegister && (
            <Form.Input label="Confirm-password" type="password" placeholder="*************" inputRef={confirmPassword} />
          )}
          {isRegister ?
            <Form.Button text={isRegister ? "Register" : "Login"} onClick={handlerRegister} />
            :
            <Form.Button text={isRegister ? "Register" : "Login"} onClick={handlerLogin} />}
        </Form.Container>
      </Form.Root>
    </>
  )
}
