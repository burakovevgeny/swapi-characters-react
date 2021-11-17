import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      yellow: string;
      white: string;
    };
    breakpoints: {
      mobile: string;
      mobileSE: string;
      tablet: string;
      desktop: string;
    };
  }
}
