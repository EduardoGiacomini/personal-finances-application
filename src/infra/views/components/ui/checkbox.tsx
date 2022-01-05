import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  cursor: pointer;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.neutral["400"]};
  display: inline-block;
  margin-bottom: 2rem;
  padding-left: 2.5rem;
  position: relative;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral["500"]};
  }

  &:hover input ~ span {
    background-color: ${({ theme }) => theme.colors.neutral["300"]};
  }

  & input:checked ~ span {
    background-color: ${({ theme }) => theme.colors.primary["500"]};
  }

  & input:checked ~ span:after {
    display: block;
  }
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CheckboxCheckmark = styled.span`
  background-color: ${({ theme }) => theme.colors.neutral["200"]};
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  height: 1.8rem;
  width: 1.8rem;
  transition: all 0.2s;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 3px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
}

export const Checkbox: React.FC<IProps> = ({
  children,
  className,
  checked,
  ...props
}) => {
  return (
    <CheckboxContainer className={className}>
      {children}
      <CheckboxInput checked={checked} {...props} />
      <CheckboxCheckmark />
    </CheckboxContainer>
  );
};
