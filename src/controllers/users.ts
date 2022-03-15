import { Request, Response } from 'express';
import * as UserService from '../services/users';

export const getUsers = async (req: Request, res: Response) => {
  const users: UserService.User[] = await UserService.findAll();
  res.status(200).json(users);
}

export const postUsers = async (req: Request, res: Response) => {
  const { name, email, password } = req.body as UserService.IUser;
  // outra opção
  // const { name, email, password }: UserService.IUser = req.body 
  const user: UserService.User = await UserService.createUser({ name, email, password });
  res.status(201).json(user);
};
