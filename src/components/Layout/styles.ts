import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 18,
      paddingVertical: 14,
    },
    headerTitle: {
      ...theme.typography.text_lg,
      color: theme.colors.secondary,
      fontWeight: 500,
      textAlign: 'center',
      flex: 1,
      position: 'relative',
    },
    searchButton: {
      width: 32,
      height: 32,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 14,
    },
    mainContent: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    screenContainer: {
      flex: 1,
    },
    contentWrapper: {
      padding: 20,
    },
    screenTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 20,
    },

    bottomNav: {
      flexDirection: 'row',
      backgroundColor: theme.colors.primary,
      justifyContent: 'space-around',
      height: 64,
    },
    navItem: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      gap: 3
    },
    activeNavItem: {
      backgroundColor: theme.colors.background,
    },
    navIcon: {
      fontSize: 24,
      marginBottom: 4,
    },
    navText: {
      ...theme.typography.text_xs,
      fontWeight: 500,
    },
    activeNavText: {
      color: theme.colors.secondary,
    },
  });
