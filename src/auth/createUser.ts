import { UseClient } from "../Prisma/userClient"
import { hash } from "bcryptjs"

interface IUser {
  name: string,
  email: string,
  password: string,
}

class CreateUser {

  async execute({name, email, password}:IUser) {
  // Verificar se existe usuario no banco de dados 
    const userAlreadyExists = await UseClient.user.findFirst({
      where: {
        email
      }
    });    
    if(userAlreadyExists) throw new Error('User Already Exist')       
    // criptografia do password do usuario
    const passwordHash = await hash(password, 8);
    // Criação de usuario
    const newUser = await UseClient.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    });
    return { newUser };
  }
}

export { CreateUser };