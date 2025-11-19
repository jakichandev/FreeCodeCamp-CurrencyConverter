import styled from "styled-components";


const SelectElement = styled.select`
padding: 0.75rem;
background-color: ${props => props.theme.colors.backgroundSecondary};
color: ${props => props.theme.colors.main};
border: none;
border-radius: 8px;

&::ms-expand {
  margin-right: 1rem;
}
`;


type SelectProps = {
  options: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


export default function Select({ options, onChange }: SelectProps) {
  return (
    <SelectElement onChange={onChange}>
      {options && options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </SelectElement>
  );
}