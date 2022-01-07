import styled, { css } from "styled-components";

export const Button = styled.button<Props>`
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

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary["500"]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary["200"]};
    outline: none;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.neutral["200"]};
      color: ${({ theme }) => theme.colors.neutral["500"]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.neutral["50"]};
        border: 2px solid ${({ theme }) => theme.colors.neutral["300"]};
        color: ${({ theme }) => theme.colors.neutral["600"]};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.neutral["100"]};
        border: 2px solid ${({ theme }) => theme.colors.neutral["400"]};
        color: ${({ theme }) => theme.colors.neutral["700"]};
        box-shadow: none;
      }

      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.primary["400"]};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary["200"]};
        outline: none;
      }
    `}
`;

type Props = {
  secondary?: boolean;
};
