import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme, insets: EdgeInsets) =>
  StyleSheet.create({
    header: {
      backgroundColor: theme.colors.primary,
      borderBottomWidth: 0,
      height: 56 + insets.top,
    },
    headerTitle: {
      color: theme.colors.secondary,
      fontSize: 18,
      fontWeight: '500',
    },
  });
