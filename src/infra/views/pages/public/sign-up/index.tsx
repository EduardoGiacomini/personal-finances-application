import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header } from "../components";
import { Title, Subtitle } from "../../../components/typography";
import { Button, Group, Label, Input, Hint, Checkbox } from "../../../components/ui";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);

  function onSubmit(event: any) {
    event.preventDefault();
    console.log({ name, email, password, agreeWithTerms });
  }

  return (
    <>
      <Header>
        <Button
          secondary
          onClick={ () => navigate("/")}
        >
          Sign in
        </Button>
      </Header>
      <Container>
        <Title className="text-center">Create an account</Title>
        <Subtitle className="text-center">
          And enjoy the best money management app.
        </Subtitle>
        <form onSubmit={onSubmit}>
          <Group>
            <Label htmlFor="name">Name</Label>
            <Input
              autoFocus
              required
              value={name}
              id="name"
              type="text"
              placeholder="Example"
              className="full-width"
              onChange={({ target }) => setName(target.value)}
            />
          </Group>
          <Group>
            <Label htmlFor="email">Email</Label>
            <Input
              required
              value={email}
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
            checked={agreeWithTerms}
            onChange={() => setAgreeWithTerms(!agreeWithTerms)}
          >
            Eu aceito com os Termos de Serviço e Condições e com a Política de Privacidade.
          </Checkbox>
          <Button type="submit" className="full-width">Sign up</Button>
        </form>
      </Container>
    </>
  );
}
