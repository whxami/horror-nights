import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { Theme } from 'theme/types';

export const createTabStyles = (theme: Theme, insets: EdgeInsets) =>
  StyleSheet.create({
    sceneWrapper: {
      backgroundColor: theme.colors.background,
    },
    tabBar: {
      backgroundColor: theme.colors.primary,
      borderTopWidth: 0,
      height: 64 + insets.bottom,
      paddingBottom: insets.bottom,
    },
    tabBarItem: {
      height: 64 + insets.bottom,
    },
    tabBarLabel: {
      ...theme.typography.text_xs,
      fontWeight: '500',
      marginTop: 3,
    },
    tabBarActive: {
      color: theme.colors.secondary,
      backgroundColor: theme.colors.background,
    },
    tabBarInactive: {
      color: theme.colors.background,
    },
    header: {
      backgroundColor: theme.colors.primary,
      borderBottomWidth: 0,
      height: 56 + insets.top,
    },
    headerTitle: {
      ...theme.typography.text_lg,
      color: theme.colors.secondary,
      fontWeight: '500',
    },
    searchButton: {
      width: 32,
      height: 32,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 14,
    },
  });
