import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      background: {
        principal: string;
        secondary: string;
        terciary: string;
      };
      text: {
        title: string;
        subtitle: string;
        hint: string;
      };
    };
  }
}
