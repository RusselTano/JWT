export interface User {
  _id: string;
  createdAt: string;
  name: string;
  email: string;
  password: string;
  token: string;
}

export interface UserForm extends Partial<User> {

}

export interface SigninForm {
  password: string;
  email: string;
}
