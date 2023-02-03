export type ThemeContextType = "light" | "dark" | unknown ;


export type Theme = {
    theme: ThemeContextType;
    setTheme: (theme: string) => void;
  };
