import styled from "styled-components";

export const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) =>
    props.$variant === "secondary"
      ? props.theme.colors.main
      : props.theme.colors.main};
  color: ${(props) =>
    props.$variant === "secondary"
      ? props.theme.colors.background
      : props.theme.colors.background};
`;
