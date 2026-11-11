import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  /** toggleTheme(originEvent?) – pass the click event to animate the reveal from that point */
  toggleTheme: () => {},
});
