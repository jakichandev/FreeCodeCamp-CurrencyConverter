import styled from "styled-components";

export const H1 = styled.h1`
font-size: 2.5rem;
color: ${props => props.theme.colors.main};
`;

export const H2 = styled(H1)`
font-size: 1.5rem;
`;

export default function Title({children}: {children: React.ReactNode}) {
  return <H1>{children}</H1>;
}