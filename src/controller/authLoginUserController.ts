import { Request, Response } from "express";
import { z } from "zod";
import { AuthLoginUser } from "../auth/authLoginUser";

const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

class AuthLoginUserController {

  async handler(request: Request, response: Response) {
    try {
      const { email, password } = LoginUserSchema.parse(request.body);
      const authLoginUser = new AuthLoginUser();
      const login = await authLoginUser.execute({ email, password });
      return response.status(200).json(login);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}

export { AuthLoginUserController };