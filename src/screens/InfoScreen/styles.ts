import { StyleSheet } from 'react-native';

import { Theme } from 'theme/types';

export const CreateStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background,
    },
    container: {
      paddingHorizontal: 16,
      gap: 16,
    },
    imageContainer: {
      position: 'relative',
      minHeight: 230,
      maxHeight: 460,
      backgroundColor: theme.colors.secondary,
      marginBottom: 16,
    },
    image: {
      height: '100%',
      width: '100%',
    },
    arrowsContainer: {
      position: 'absolute',
      bottom: 24,
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      flexDirection: 'row',
      width: '100%',
    },
    arrowWrapper: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    infoContainer: {
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    infoItemText: {
      color: theme.colors.secondary,
      ...theme.typography.text_sm,
      fontWeight: 400,
    },
    gridContainer: {
      marginTop: 8,
    },
    tryOthersContainer: {
      marginTop: 8,
    },
  });
