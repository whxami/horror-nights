import { EdgeInsets } from 'react-native-safe-area-context';

import ExpandableSearchHeader from 'components/ExpandableSearchHeader';
import GoBackHeader from 'components/GoBackHeader';
import { Theme } from 'theme/types';

import { createTabStyles } from 'components/TabNavigator/styles';

export const createStackScreenOptions = (theme: Theme, insets: EdgeInsets) => {
  const styles = createTabStyles(theme, insets);

  return {
    defaultOptions: {
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerTintColor: styles.headerTitle.color,
    },

    mainScreenOptions: (title: string) => ({
      title,
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerTintColor: styles.headerTitle.color,
      headerRight: () => <ExpandableSearchHeader />,
    }),

    infoScreenOptions: (title: string) => ({
      title,
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerTintColor: styles.headerTitle.color,
      headerLeft: () => <GoBackHeader />,
    }),
  };
};
