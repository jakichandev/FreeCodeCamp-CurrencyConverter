import styled from "styled-components";

const Input = styled.input`
box-sizing: border-box;
padding: 0.75rem;
background-color: ${props => props.theme.colors.backgroundSecondary};
color: ${props => props.theme.colors.main};
border: none;
border-radius: 8px;
`;

export default Input;