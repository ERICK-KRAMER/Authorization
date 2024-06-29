import { AuthLoginUser } from "../auth/authLoginUser";
import { Request, Response } from "express";
import { z } from "zod";

const SingInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

class SingIn {
  async handler(request: Request, response: Response) {
    try {
      const { email, password } = await SingInSchema.parseAsync(request.body);
      const user = new AuthLoginUser();
      const singIn = await user.execute({ email, password });
      return response.json({
        user: singIn,
        message: "Login successfully"
      });
    } catch (error) {
      response.status(400).json({
        message: "Erro ao realizar login",
        status: 400,
        error
      })
    }
  }
} export { SingIn };