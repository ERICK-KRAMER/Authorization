import { Request, Response } from "express";
import { IUser } from "../types/user";
import { z, ZodType } from "zod";
import { CreateUser } from "../auth/createUser"

const UserSchema: ZodType<IUser> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email("Digite um email valido"),
  password: z.string().min(6, "A senha precisa coter no minimo 6 caracteres"),
})

class CreateUserController {
  async handler (request:Request, response:Response) {
    try {
      const { firstName, lastName, email, password } = UserSchema.parse(request.body);
      const CreateNewUser = new CreateUser();
      const user = await CreateNewUser.execute({ firstName, lastName, email, password });
      return response.status(201).json(user);
    } catch (error) {
      response.status(400).json({error: `Não foi possivel criar usuário, ${error}`});
    }
  }
}

export { CreateUserController };