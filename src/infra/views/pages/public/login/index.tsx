import React from "react";
import { Container } from "../components";
import { Title, Subtitle } from "../../../components/typography";
import { Button, Group, Label, Input, Hint, Checkbox } from "../../../components/ui";

export function Login() {

  function onSubmit(event: any) {
    event.preventDefault();
  }

  return (
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
            required
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="full-width"
          />
        </Group>
        <Group>
          <Label htmlFor="password">Password</Label>
          <Input
            required
            id="password"
            type="password"
            placeholder="••••••••"
            minLength={8}
            className="full-width"
          />
          <Hint>Must be at least 8 characters.</Hint>
        </Group>
        <Checkbox checked={true} onChange={() => {}}>
          Remember-me
        </Checkbox>
        <Button type="submit" className="full-width">Sign in</Button>
      </form>
    </Container>
  );
}
