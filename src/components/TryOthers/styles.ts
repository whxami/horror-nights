import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    textTitle: {
      ...theme.typography.text_sm,
      fontWeight: 400,
      color: theme.colors.secondary,
      marginBottom: 12,
      marginLeft: 16,
    },
  });
