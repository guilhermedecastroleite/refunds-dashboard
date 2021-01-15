import { extendTheme } from '@chakra-ui/react';

import theme from './theme';

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
          fontSize: '16px',
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
});

export default chakraUiTheme;
