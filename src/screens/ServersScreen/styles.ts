import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      gap: 8,
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
  });
