import { compare } from "bcryptjs";
import { UseClient } from "../Prisma/userClient";
import { sign } from "jsonwebtoken";

export interface IAuth {
  email: string,
  password: string,
}

class AuthLoginUser {

  async execute({ email, password }: IAuth) {

    const userAlreadyExists = await UseClient.user.findFirst({
      where: { email }
    });
    
    if (!userAlreadyExists) {
      throw new Error("User or password incorrect");
    }
    
    const passwordMatch = await compare(password, userAlreadyExists.password);
    
    if (!passwordMatch) {
      throw new Error("User or password incorrect");
    }

    const name = userAlreadyExists.name;
    
    const token = sign({ name }, "a523e3f0-6bd0-48b9-a408-6dc199b85080");

    return token;
  
  }

}

export { AuthLoginUser };