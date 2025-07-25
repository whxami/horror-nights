import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

type ButtonSize = 'medium' | 'large';

export const createStyles = (theme: Theme, size: ButtonSize) =>
  StyleSheet.create({
    outerShadow: {
      backgroundColor: '#327815',
      paddingBottom: 3,
      paddingRight: 3,
    },

    outerShadowPressed: {
      backgroundColor: '#519E89',
      paddingBottom: 3,
      paddingRight: 3,
    },

    innerShadow: {
      backgroundColor: '#9BE57C',
      paddingTop: 3,
      paddingLeft: 3,
    },

    innerShadowPressed: {
      backgroundColor: theme.colors.background,
      paddingTop: 3,
      paddingLeft: 3,
    },

    button: {
      backgroundColor: theme.colors.green,
      alignItems: 'center',
      justifyContent: 'center',
      ...(size === 'medium'
        ? {
            paddingHorizontal: 24,
            paddingVertical: 8,
          }
        : {
            paddingHorizontal: 32,
            paddingVertical: 12,
          }),
    },

    buttonPressed: {
      backgroundColor: theme.colors.primary,
    },

    text: {
      color: theme.colors.secondary,
      fontWeight: '600',
      ...(size === 'medium'
        ? theme.typography.text_md
        : theme.typography.text_lg),
    },
  });
