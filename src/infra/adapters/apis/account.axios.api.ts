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
    } = await api.post<{ user: User; token: string }>("/api/auth", {
      email,
      password,
    });
    this.setAuthorizationToken(token);
    return { user, token };
  }

  async refreshToken(): Promise<{ user: User; token: string }> {
    const {
      data: { user, token },
    } = await api.post<{ user: User; token: string }>("/api/refresh");
    this.setAuthorizationToken(token);
    return { user, token };
  }

  setAuthorizationToken(token: string) {
    api.defaults.headers.common = { Authorization: `Bearer ${token}` };
  }
}
