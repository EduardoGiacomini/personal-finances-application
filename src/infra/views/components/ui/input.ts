import styled from "styled-components";

export const Group = styled.div`
  margin: 2rem 0;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.neutral["500"]};
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.neutral["200"]};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.neutral["600"]};
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral["400"]};
  }

  &:focus-visible {
    border: 2px solid ${({ theme }) => theme.colors.primary["400"]};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.primary["200"]};
    outline: none;
  }
`;

export const Hint = styled.p`
  color: ${({ theme }) => theme.colors.neutral["400"]};
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 6px;
`;
