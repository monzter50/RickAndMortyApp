import {createTokens, createBlocks} from '@design-blocks/native';
import {tailwindCssColors} from '@design-blocks/colors';

export const lightTheme = {
  tokens: {
    colors: {
      ...tailwindCssColors,
    },
  },
  extendTokens: {
    spacings: {
      '7xl': 76,
    },
    radii: {
      '6xl': 32,
    },
    fontSizes: {
      '10xl': 80,
    },
  },
} as const;
const [themeTokens] = createTokens({
  theme: lightTheme,
});

export const {block, css, themes} = createBlocks({
  themes: {light: themeTokens},
});
