import styled from "styled-components";

type Positions = "top-left" | "top-right" | "bottom-left" | "bottom-right";


const FixedContainer = styled.div<{ $position: Positions }>`
  position: fixed;
  top: ${(props) =>
    props.$position === "top-left" || props.$position === "top-right"
      ? "1rem"
      : "auto"};
  left: ${(props) =>
    props.$position === "top-left" || props.$position === "bottom-left"
      ? "1rem"
      : "auto"};
  right: ${(props) =>
    props.$position === "top-right" || props.$position === "bottom-right"
      ? "1rem"
      : "auto"};
  bottom: ${(props) =>
    props.$position === "bottom-left" || props.$position === "bottom-right"
      ? "1rem"
      : "auto"};
`;

export default function Fixed({
  children,
  position
}: {
  children: React.ReactNode;
  position: Positions;
}) {
  return <FixedContainer $position={position}>{children}</FixedContainer>;
}
