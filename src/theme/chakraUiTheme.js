import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import theme from './theme';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  xxl: '1800px',
});

const chakraUiTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontFamily: 'Nunito Sans',
        fontWeight: 'normal',
        color: theme.colors.gray4,
      },
      sizes: {
        md: {
          height: '36px',
          fontSize: ['12px', '13px', '16px'],
        },
      },
      variants: {
        outline: () => ({
          bg: theme.colors.white,
          color: theme.colors.gray4,
          borderColor: theme.colors.gray4,
        }),
        solid: () => ({
          bg: theme.colors.green4,
          color: theme.colors.white,
        }),
      },
    },
  },
  breakpoints,
});

export default chakraUiTheme;
