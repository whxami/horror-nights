import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

type CardSizes = 'small' | 'large';

export const createStyles = (theme: Theme, cardSize: CardSizes) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.light,
      flexDirection: 'column',
    },

    imageContainer: {
      backgroundColor: theme.colors.light,
      height: cardSize === 'small' ? 86 : 178,
      justifyContent: 'center',
      alignItems: 'center',
    },

    image: {
      width: '100%',
      height: '100%',
    },

    infoContainer: {
      backgroundColor: theme.colors.secondary,
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      paddingVertical: 8,
    },

    skinName: {
      color: theme.colors.text,
      ...theme.typography.text_sm,
    },

    ratingContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },

    rating: {
      color: theme.colors.text,
      ...theme.typography.text_sm,
      marginLeft: 6,
    },
  });
