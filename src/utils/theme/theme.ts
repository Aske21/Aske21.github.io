const theme = {
  colors: {
    // Catppuccin Mocha base colors
    base: "#1e1e2e",
    mantle: "#181825",
    crust: "#11111b",
    
    // Text colors
    text: "#cdd6f4",
    subtext0: "#a6adc8",
    subtext1: "#bac2de",
    
    // Accent colors
    blue: "#89b4fa",
    lavender: "#b4befe",
    sapphire: "#74c7ec",
    sky: "#89dceb",
    teal: "#94e2d5",
    green: "#a6e3a1",
    yellow: "#f9e2af",
    peach: "#fab387",
    maroon: "#eba0ac",
    red: "#f38ba8",
    mauve: "#cba6f7",
    pink: "#f5c2e7",
    flamingo: "#f2cdcd",
    rosewater: "#f5e0dc",
    
    // Legacy/alias colors for compatibility
    background: "#1e1e2e",
    primary: "#cdd6f4",
    secondary: "#bac2de",
    light: "#313244", // surface0
    link: "#89b4fa",
  },
  fonts: {
    body: '"JetBrains Mono", "Fira Code", "Monaco", "Courier New", monospace',
    heading: '"JetBrains Mono", "Fira Code", "Monaco", "Courier New", monospace',
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
