import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header } from "../components";
import { Title, Subtitle } from "../../../components/typography";
import { Button, Group, Label, Input, Hint, Checkbox } from "../../../components/ui";
import { useUser } from "../../../context/user";
import {AccountApi} from "../../../../../domain/ports/apis";

export function SignIn({ accountApi }: Props) {
  const navigate = useNavigate();

  const { user, setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const { user } = await accountApi.authenticate({email, password});
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header>
        <Button
          secondary
          onClick={ () => navigate("/sign-up")}
        >
          Sign up
        </Button>
      </Header>
      <Container>
        <Title className="text-center">Welcome back</Title>
        <Subtitle className="text-center">
          Enter your credentials to access your account.
        </Subtitle>
        <form onSubmit={onSubmit}>
          <Group>
            <Label htmlFor="email">Email</Label>
            <Input
              autoFocus
              value={email}
              required
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="full-width"
              onChange={({ target }) => setEmail(target.value)}
            />
          </Group>
          <Group>
            <Label htmlFor="password">Password</Label>
            <Input
              required
              value={password}
              id="password"
              type="password"
              placeholder="••••••••"
              minLength={8}
              className="full-width"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Hint>Must be at least 8 characters.</Hint>
          </Group>
          <Button type="submit" className="full-width">Sign in</Button>
        </form>
      </Container>
    </>
  );
}

type Props = {
  accountApi: AccountApi
};
