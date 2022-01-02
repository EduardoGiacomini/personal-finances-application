import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary["500"]};
  border: 2px solid ${({ theme }) => theme.colors.primary["500"]};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.neutral["50"]};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1rem 2rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary["600"]};
    border: 2px solid ${({ theme }) => theme.colors.primary["600"]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary["700"]};
    border: 2px solid ${({ theme }) => theme.colors.primary["700"]};
  }

  &:focus-visible {
    border: 2px solid ${({ theme }) => theme.colors.primary["300"]};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary["300"]};
    outline: none;
  }
`;
