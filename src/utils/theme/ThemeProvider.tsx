// src/styled-components/ThemeProvider.tsx

import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import theme, { ThemeType } from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <SCThemeProvider theme={theme as ThemeType}>{children}</SCThemeProvider>
  );
};

export default ThemeProvider;
