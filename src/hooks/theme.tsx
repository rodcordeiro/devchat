import React, { createContext, useContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import useRedux from '@/hooks/useRedux';
import { store } from '@/redux/store.redux';
import { alterTheme } from '@/redux/actions.redux';
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
  const { useAppSelector } = useRedux();
  const { theme } = useAppSelector((state) => state.theme);
  const { dispatch } = store;
  
  const toggleTheme = () => {
    dispatch(alterTheme(theme.title === 'dark' ? light : dark));
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
