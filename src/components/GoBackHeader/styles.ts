import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    iconContainer: {
      backgroundColor: theme.colors.background,
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 14,
    },
  });
