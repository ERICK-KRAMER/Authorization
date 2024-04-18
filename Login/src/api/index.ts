const endpoit = "http://localhost:3000";

export interface IDataRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginUser{
  email: string,
  password: string
}

export const Register = async({firstName, lastName, email, password}: IDataRegister) => {
  try {
    const response = await fetch(`${endpoit}/CreateUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, email, password })
    })
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const LoginUser = async({ email, password }:ILoginUser) => {
  try {
    const response = await fetch(`${endpoit}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}