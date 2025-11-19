import styled from "styled-components";

export const Label = styled.label<{ $level: 1 | 2 | 3 }>`
  font-size: ${(props) =>
  props.$level === 1 ? "2rem" : props.$level === 2 ? "1.5rem" : "1.17rem"};
  font-weight: bold;
  color: #7a7ef1ff;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  outline: 0.5px solid #7a7ef14e;
  border-radius: 8px;
  margin: 1rem 0;
  padding: 0.4rem;
`;

type FieldProps = {
  label: string;
  name: string;
  defaultValue?: string | number;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};


export default function Field({
  label,
  name,
  children,
}: FieldProps) {
  return (
    <FieldContainer>
      <Label htmlFor={name} $level={3}>
        {label}
      </Label>
    {children}
    </FieldContainer>
  );
}
