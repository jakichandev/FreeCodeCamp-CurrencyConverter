import styled from "styled-components";

export const Main = styled.main`
transition: background-color 0.3s ease-out;
display: flex;
flex-direction: column;
place-items: center;
justify-content: center;
min-width: 320px;
min-height: 100vh;
background-color: ${props => props.theme.colors.background};
`;