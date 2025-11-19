import styled from "styled-components";

export const Paragraph = styled.p<{ $weight: "normal" | "bold", $size?: "small" | "normal" | "large" }>`
  font-size: 1rem;
  color: ${props => props.theme.colors.main};
  font-weight: ${props => props.$weight === "bold" ? "bold" : "normal"};
  ${props => {
    if (props.$size === "small") {
      return "font-size: 0.875rem;";
    } else if (props.$size === "large") {
      return "font-size: 1.25rem;";
    } else {
      return "";
    }
  }}
`;
