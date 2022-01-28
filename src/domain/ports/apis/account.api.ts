import { User } from "../../entities";

export interface AccountApi {
  authenticate({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ user: User; token: string }>;

  refreshToken(): Promise<{ user: User; token: string }>;
}
