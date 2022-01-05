import React, { KeyboardEvent } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 3px;
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

  &:focus-visible {
    border: 2px solid ${({ theme }) => theme.colors.primary["400"]};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary["300"]};
    outline: none;
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
  height: 1.9rem;
  width: 1.9rem;
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
  onChange: () => void;
  labelWrap?: boolean;
}

export const Checkbox: React.FC<IProps> = ({
  children,
  className,
  checked,
  onChange,
  ...props
}) => {
  const handledKeys = ["enter", "space"];

  function handleOnKeyUpEvent({ code }: KeyboardEvent<HTMLLabelElement>) {
    if (handledKeys.includes(code.toLowerCase())) {
      onChange();
    }
  }

  return (
    <CheckboxContainer
      onKeyUp={(event) => handleOnKeyUpEvent(event)}
      tabIndex={0}
      role="button"
      className={className}
    >
      {children}
      <CheckboxInput readOnly tabIndex={1} checked={checked} {...props} />
      <CheckboxCheckmark />
    </CheckboxContainer>
  );
};
