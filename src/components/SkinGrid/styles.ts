import { StyleSheet } from 'react-native';
import { Theme } from 'theme/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cardContainer: {
      width: '50%',
      paddingRight: 6,
      paddingLeft: 6,
      marginBottom: 12,
    },
    textTitle: {
      ...theme.typography.text_sm,
      fontWeight: '400',
      color: theme.colors.secondary,
      marginBottom: 12,
      marginLeft: 16,
    },
  });
