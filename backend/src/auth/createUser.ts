import { UseClient } from "../Prisma/userClient";
import bcryptjs from "bcryptjs";
import { IUser } from "../types/user";

class CreateUser {
  async execute({ firstName, LastName, email, password }: IUser) {
      // Verificar se o usuário já existe no banco de dados 
      const existingUser = await UseClient.user.findFirst({
        where: { email }
      });

      if (existingUser) {
        throw new Error('User Already Exists');
      }

      // Criptografar a senha do usuário
      const passwordHash = await bcryptjs.hash(password, 8);

      // Criar um novo usuário no banco de dados
      const newUser = await UseClient.user.create({
        data: {
          firstName,
          LastName,
          email,
          password: passwordHash
        }
      });

      return newUser

  }
}

export { CreateUser };
