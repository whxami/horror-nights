import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme, insets: EdgeInsets) =>
  StyleSheet.create({
    wrapper: {
      paddingTop: insets.top,
      backgroundColor: theme.colors.primary,
    },
    header: {
      position: 'relative',
      backgroundColor: theme.colors.primary,
      borderBottomWidth: 0,
      paddingTop: 18,
      paddingBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
    },
    headerTitle: {
      ...theme.typography.text_lg,
      color: theme.colors.secondary,
      fontWeight: '500',
    },
    searchButton: {
      position: 'absolute',
      right: 14,
    },
    backButtonContainer: {
      position: 'absolute',
      left: 14,
    },
  });
