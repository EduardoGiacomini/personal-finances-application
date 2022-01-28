import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../vendors";
import { User } from "../../../domain/entities";
import { AccountAxiosApi } from "../../adapters/apis";

export const UserContext = createContext<UserContextType>({});

export const useUser = () => useContext(UserContext);

export function UserWrapper({ children }: UserWrapperProps) {
  const accountApi = new AccountAxiosApi();

  const [user, setUser] = useState<User | undefined>(undefined);
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
      }, expires - 500);
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

type UserContextType = {
  user?: User;
  setUser?: Dispatch<SetStateAction<User | undefined>>;
};

type UserWrapperProps = {
  children: ReactNode;
};
