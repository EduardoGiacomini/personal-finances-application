import React from "react";
import styled from "styled-components";
import {Logo} from "../../../components/layout";

const HeaderContainer = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral["200"]};;
  width: 100%;
  padding: 2rem;
`;

const HeaderContent = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 124rem;
  width: 100%;
`;

export function Header({ children }: Props) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        {children}
      </HeaderContent>
    </HeaderContainer>
  );
}

type Props = {
  children?: React.ReactNode
}
