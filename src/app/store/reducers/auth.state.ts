import { User } from "../models/User.model";

export interface AuthState {
  user: User | null;
  token: string | null;
}
