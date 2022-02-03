import { axios } from "../../../vendors";
import { User } from "../../entities";

export async function refreshToken(): Promise<Output> {
  const { data } = await axios.post<Output>("/api/refresh");
  const { user, token } = data;
  setInMemoryToken(token);
  return { user, token };
}

function setInMemoryToken(token: string) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
}

type Output = {
  user: User;
  token: string;
};
