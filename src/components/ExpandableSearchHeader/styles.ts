import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const createSearchHeaderStyles = (theme: Theme) =>
  StyleSheet.create({
    searchButton: {
      width: 32,
      height: 32,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    expandedWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    closeButton: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
      backgroundColor: theme.colors.background,
    },
    inputContainer: {
      height: 32,
    },
    inputWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.secondary,
      paddingRight: 12,
      paddingLeft: 8,
      height: 32,
    },
    searchInput: {
      flex: 1,
      ...theme.typography.text_xs,
      fontWeight: 500,
      color: theme.colors.background,
      marginLeft: 8,
      paddingVertical: 0,
      height: 32,
    },
    searchIcon: {
      color: theme.colors.background,
    }
  });
