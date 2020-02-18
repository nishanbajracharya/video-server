import { createContext } from 'react';

export const ThemeContext = createContext({
  value: 'light',
  update: () => {},
  toggle: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;