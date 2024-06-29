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


class Auth {
  private endpoint: string = "http://localhost:3000/"

  async register(props: IDataRegister) {
    try {
      const response = await fetch(`http://localhost:3000/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async singIn(props: ILoginUser) {
    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

} export { Auth };