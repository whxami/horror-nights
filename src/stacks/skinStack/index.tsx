import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ExpandableSearchHeader from 'components/ExpandableSearchHeader';
import GoBackHeader from 'components/GoBackHeader';
import { SCREENS } from 'const/screens';
import InfoScreen from 'screens/InfoScreen';
import SkinsScreen from 'screens/SkinsScreen';
import { useThemedStyles } from 'theme/ThemeProvider';
import { InfoScreenParams } from 'types/navigationTypes';

import { createTabStyles } from 'components/TabNavigator/styles';

export type SkinsStackParamList = {
  SkinsList: undefined;
  Info: InfoScreenParams;
};

const Stack = createNativeStackNavigator<SkinsStackParamList>();

const SkinsStack = () => {
  const insets = useSafeAreaInsets();
  const styles = useThemedStyles((theme) => createTabStyles(theme, insets));

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SkinsList"
        component={SkinsScreen}
        options={{
          title: SCREENS.SKINS,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: styles.headerTitle.color,
          headerRight: () => <ExpandableSearchHeader />,
        }}
      />
      <Stack.Screen
        name={SCREENS.INFO}
        component={InfoScreen}
        options={() => ({
          title: SCREENS.SKINS,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: styles.headerTitle.color,
          headerLeft: () => <GoBackHeader />,
        })}
      />
    </Stack.Navigator>
  );
};

export default SkinsStack;
