import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bodyBg};
    font-family: Inter;
    transition: all 0.35s linear;
    text-align: center;
  }
  `