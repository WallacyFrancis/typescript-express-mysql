import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser, User } from '../services/users'
import connection from './connection';

// type SelectResults = [FieldPacket[], RowDataPacket[]]

export const create = async (user: IUser): Promise<User> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO users(name, email, passwornd) VALUES (?, ?, ?)',
    [user.name, user.email, user.password]
  );
  return {
    id: result.insertId,
    name: user.name,
    email: user.email,
    password: user.password,
  };
};

export const findAll = async (): Promise<User[]> => {
  // const [users]: SelectResults = await connection.execute('SELECT * FROM USERS');
  const [users] = await connection.execute<RowDataPacket[]>('SELECT * FROM USERS');
  return users as User[];
};