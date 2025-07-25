import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      height: 44,
      width: 234,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    text: {
      ...theme.typography.text_lg,
      color: theme.colors.background,
    },
  });
