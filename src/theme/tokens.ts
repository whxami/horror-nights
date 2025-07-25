import { Theme } from './types';

export const theme: Theme = {
  colors: {
    primary: '#175947',
    secondary: '#FFFFFF',
    background: '#0B2425',
    text: '#09332D',
    light: '#68998C',
    green: '#69BF00',
  },
  typography: {
    text_xs: {
      fontSize: 12,
      fontWeight: '600',
      fontFamily: 'Tektur-Regular',
      lineHeight: 16,
    },
    text_sm: {
      fontSize: 14,
      fontWeight: '600',
      fontFamily: 'Tektur-Regular',
      lineHeight: 20,
    },
    text_md: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Tektur-Regular',
      lineHeight: 24,
    },
    text_lg: {
      fontSize: 18,
      fontWeight: '600',
      fontFamily: 'Tektur-Regular',
      lineHeight: 28,
    },
  },
};
