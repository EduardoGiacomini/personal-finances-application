export type AuthenticateApi = ({ email, password }: Input) => Output;

type Input = {
  email: string;
  password: string;
};

type Output = {
  token: string;
};
