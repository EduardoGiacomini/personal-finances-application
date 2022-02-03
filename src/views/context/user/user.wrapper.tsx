import { ReactNode, useEffect, useState } from "react";
import { User } from "../../../data/entities";
import { refreshToken } from "../../../data/services/account";
import { UserContext } from "./index";

export function UserWrapper({ children }: UserWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await generateAccessTokenWithRefreshToken();
    })();
  }, []);

  async function generateAccessTokenWithRefreshToken() {
    try {
      const { user } = await refreshToken();
      setUser(user);
      const expires = 60000; // TODO: get expires time from backend
      setTimeout(() => {
        generateAccessTokenWithRefreshToken();
      }, expires - 1000);
    } catch (error) {
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
