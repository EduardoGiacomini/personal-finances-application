import { api } from "../../vendors";
import { AccountApi } from "../../../domain/ports/apis";
import { User } from "../../../domain/entities";

export class AccountAxiosApi implements AccountApi {
  async authenticate({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ user: User; token: string }> {
    const {
      data: { user, token },
    } = await api.post<{ user: User; token: string }>("/auth", {
      email,
      password,
    });
    return { user, token };
  }

  async refreshToken(): Promise<{ user: User; token: string }> {
    const {
      data: { user, token },
    } = await api.post<{ user: User; token: string }>("/refresh");
    return { user, token };
  }
}
