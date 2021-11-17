import { DefaultTheme } from 'styled-components';
import { Color } from '../models';

enum Breakpoint {
  MOBILE_SE = '360px',
  MOBILE = '768px',
  TABLET = '1024px',
  DESKTOP = '1280px',
}

const defaultTheme: DefaultTheme = {
  colors: {
    main: Color.MAIN,
    yellow: Color.YELLOW,
    white: Color.WHITE,
  },
  breakpoints: {
    mobileSE: Breakpoint.MOBILE_SE,
    mobile: Breakpoint.MOBILE,
    tablet: Breakpoint.TABLET,
    desktop: Breakpoint.DESKTOP,
  },
};

export { defaultTheme };
