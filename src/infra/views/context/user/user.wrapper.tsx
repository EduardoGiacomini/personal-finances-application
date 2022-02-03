import { ReactNode, useEffect, useState } from "react";
import { api } from "../../../vendors";
import { User } from "../../../../domain/entities";
import { AccountAxiosApi } from "../../../adapters/apis";
import { UserContext } from "./index";

export function UserWrapper({ children }: UserWrapperProps) {
  const accountApi = new AccountAxiosApi();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await refreshToken();
    })();
  }, []);

  async function refreshToken() {
    try {
      const { user, token } = await accountApi.refreshToken();

      Object.assign(api.defaults, { headers: { authorization: token } });
      setUser(user);
      const expires = 60000;

      setTimeout(() => {
        refreshToken();
      }, expires - 1000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loading ? null : children}
    </UserContext.Provider>
  );
}

type UserWrapperProps = {
  children: ReactNode;
};
