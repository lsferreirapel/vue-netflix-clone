import jwt from 'jsonwebtoken';
import { User } from './auth.types';

export const createToken = (user: User) => {
  // secret = process.env.VUE_APP_TMDB_NOT_SECRET_KEY
  const token = jwt.sign(user, 'secret');
  return token;''
};
export const getUserFromToken = (token: string) => {
  // secret = process.env.VUE_APP_TMDB_NOT_SECRET_KEY
  const data = jwt.verify(token, 'secret');
  return data;
};
