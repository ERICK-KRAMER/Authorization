import { ButtonSubmit } from "./ButtonSubmit"
import { FormContainer } from "./fromContainer"
import { ImageComponent } from "./image"
import { Input } from "./inputs"

export const Form = () => {

  return(
    <main className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
        <div className="md:flex w-full">
          <ImageComponent/>
          <FormContainer >
            <Input label="First name" placeholder="John"/>
            <Input label="Last name" placeholder="Smith"/>
            <Input label="Email" placeholder="johnsmith@example.com"/>
            <Input label="Password" placeholder="*************"/>
            <Input label="Confirm-password" placeholder="*************"/>
            <ButtonSubmit text="Submit"/>
          </FormContainer>
        </div>
      </div>
    </main>   
  )
}

