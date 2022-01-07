import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header } from "../components";
import { Title, Subtitle } from "../../../components/typography";
import { Button, Group, Label, Input, Hint, Checkbox } from "../../../components/ui";

export function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function onSubmit(event: any) {
    event.preventDefault();
    console.log({ email, password, rememberMe });
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
          <Checkbox
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          >
            Remember-me
          </Checkbox>
          <Button type="submit" className="full-width">Sign in</Button>
        </form>
      </Container>
    </>
  );
}
