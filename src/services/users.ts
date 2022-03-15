import * as UserModel from '../models/User';

export interface IUser {
  name: string,
  email: string,
  password: number,
}

export interface User extends IUser {
  id: number,
}

export const findAll = async (): Promise<User[]> => {
  const users = await UserModel.findAll()
  return users;
};

export const createUser = async (user: IUser): Promise<User> => {
  const users = await UserModel.create(user);
  return users;
};