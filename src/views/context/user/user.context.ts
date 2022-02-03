import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { User } from "../../../data/entities";

export const UserContext = createContext<UserContextType>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
