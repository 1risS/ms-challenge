import "./index.css";

import styled from "styled-components";
import { ChangeEvent, useState } from "react";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-family: Inter;
  font-size: 12px;
  color: #AEB3CB;
  font-weight: 700;
`;

const Switch = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  background: linear-gradient(to left, #3EDA82, #378FE6);
  border-radius: 32px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 35px;
    top: 50%;
    left: 2px;
    background: #252B45;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #AEB3CB;

    &:before {
      transform: translate(25px, -50%);
    }
  }
`;

const ModeToggle = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
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
