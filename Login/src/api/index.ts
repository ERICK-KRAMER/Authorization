export interface IDataRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginUser {
  email: string,
  password: string
}

export const Register = async ({ firstName, lastName, email, password, confirmPassword }: IDataRegister) => {
  try {
    if (password !== confirmPassword) {
      console.log('As senhas não coincidem!');
      return { error: 'As senhas não coincidem!' };
    }

    return {
      data: {
        firstName,
        lastName,
        email,
        message: 'Registro realizado com sucesso!'
      }
    };

  } catch (error) {
    console.log(error);
    return { error: 'Erro ao registrar' };
  }
}

export const LoginUser = async ({ email, password }: ILoginUser) => {
  try {
    return {
      data: {
        email: email,
        message: 'Login realizado com sucesso!'
      }
    };
  } catch (error) {
    console.log(error);
    return { error: 'Erro ao realizar login' };
  }
}
