import React from 'react';

//? types && interfaces //
import { ThemeContextType } from '../types/types';
import {ThemeProps}  from '../types/interfaces';


const getInitialTheme = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
        return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) {
        return 'dark';
    }
}

return 'light'
};


export const ThemeContext = React.createContext<ThemeContextType | string>('');

export const ThemeProvider: React.FC<ThemeProps> = (props: ThemeProps) => {
  const [theme, setTheme] = React.useState<string>(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);
    localStorage.setItem('color-theme', rawTheme);
  };

  if (props.initialTheme) {
    rawSetTheme(props.initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};
