import styled from "styled-components";

export const Paragraph = styled.p<{ $weight: "normal" | "bold", $size?: "extra-small" | "small" | "normal" | "large" }>`
  font-size: ${props => {
    switch (props.$size) {
      case "extra-small":
        return "0.5rem";
      case "small":
        return "0.75rem";
      case "normal":
        return "1rem";
      case "large":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};
  color: ${props => props.theme.colors.main};
  font-weight: ${props => props.$weight === "bold" ? "bold" : "normal"};
`;
