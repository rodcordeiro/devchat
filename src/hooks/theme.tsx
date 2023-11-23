import React, { createContext, useContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { dark } from '@/styles/dark';
import { light } from '@/styles/light';

export interface ITheme {
  theme: DefaultTheme;
  toggleTheme(): void;
}

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const AppContext = createContext<ITheme>({} as ITheme);

export function ThemeHook({
  children,
}: ThemeProviderProps): React.ReactElement {
  const [theme, setTheme] = React.useState<DefaultTheme>(dark);
  const toggleTheme = () => {
    setTheme(theme && theme.title === 'dark' ? light : dark);
  };

  return (
    <>
      <AppContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export function useTheme(): ITheme {
  return useContext(AppContext);
}
