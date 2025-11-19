import React from "react";
import styled from "styled-components";

const Form = styled.form<{ $centered?: boolean }>`
  padding: 2rem;
  font-size: 1rem;
  color: white;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.background};
  width: 500px,
`;

export default function ConverterForm({
  children,
  onSubmit
} : {
  children: React.ReactNode;
  onSubmit?: () => void;
}) {
  return <Form onSubmit={() => onSubmit && onSubmit()}>{children}</Form>;
}
