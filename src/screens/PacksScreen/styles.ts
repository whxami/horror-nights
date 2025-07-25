import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background,
    },
    container: {
      gap: 12,
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
  });
