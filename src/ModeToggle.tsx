import "./index.css";

import styled from "styled-components";
import { devices } from "./Theme";
import { ChangeEvent, useState } from "react";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Inter;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor2};
  font-weight: 700;

  @media ${devices.tablet}{
      font-size: 12px;
  }
  @media ${devices.mobileL}{
      margin: 2em;
      width: 80px;
      font-size: 10px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
  }
`;

const Switch = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  background: ${({ theme }) => theme.toggle};
  border-radius: 32px;
  transition: 300ms all;
  cursor: pointer;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 35px;
    top: 50%;
    left: 3px;
    background: ${({ theme }) => theme.toggleCircle};
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  // switch animation
  &:checked + ${Switch} {
    &:before {
      transform: translate(24px, -50%);
    }
  }
`;

const ModeToggle = ({ onChange }: { onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e)
  };

  return (
    <Label>
      <span>{checked ? "Light" : "Dark"} Mode</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};

export default ModeToggle
