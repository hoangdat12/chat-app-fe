import { createContext } from 'react';
import { IUser } from '../interface';

interface AuthContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});
