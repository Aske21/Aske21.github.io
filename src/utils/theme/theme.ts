const theme = {
  colors: {
    background: "#232634",
    primary: "white",
    secondary: "#f0f0f0",
    light: "#2c303a",
    link: "#3498db",
    text: "#FFFFFF",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
};

export type ThemeType = typeof theme;
export default theme;
