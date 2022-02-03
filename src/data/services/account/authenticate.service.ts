import { axios } from "../../../vendors";
import { User } from "../../entities";

export async function authenticate({
  email,
  password,
}: Input): Promise<Output> {
  const { data } = await axios.post<Output>("/api/auth", {
    email,
    password,
  });
  const { user, token } = data;
  setInMemoryToken(token);
  return { user, token };
}

function setInMemoryToken(token: string) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
}

type Input = {
  email: string;
  password: string;
};

type Output = {
  user: User;
  token: string;
};
