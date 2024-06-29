import { Request, Response } from "express";
import { CreateUser } from "../auth/createUser";
import { z } from "zod";

const registerSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

class Register {
  async handler(request: Request, resposne: Response) {
    try {
      const { firstName, lastName, email, password } = registerSchema.parse(request.body);
      const user = new CreateUser();
      const newUser = user.execute({ firstName, lastName, email, password });
      return resposne.status(201).json(newUser);
    } catch (error) {
      resposne.status(400).json({
        message: 'Error',
        status: 400,
        error
      })
    }
  }
}

export { Register }