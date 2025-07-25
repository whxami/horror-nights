import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: theme.colors.background,
    },
  });
