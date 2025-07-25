import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingLeft: 12,
      paddingRight: 6,
      paddingVertical: 6,
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: theme.colors.secondary,
      gap: 10,
    },
    textContainer: {
      gap: 8,
      flex: 1,
    },
    textWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    smallText: {
      ...theme.typography.text_xs,
      fontWeight: 400,
    },
    bigText: {
      ...theme.typography.text_sm,
      fontWeight: 400,
    },
    primaryText: {
      color: theme.colors.primary,
    },
    secondaryText: {
      color: theme.colors.background,
    },
  });
