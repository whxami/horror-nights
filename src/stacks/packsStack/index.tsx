import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SCREENS } from 'const/screens';
import InfoScreen from 'screens/InfoScreen';
import PacksScreen from 'screens/PacksScreen';
import { useTheme } from 'theme/ThemeProvider';
import { createStackScreenOptions } from 'utils/createStackScreenOption';

const Stack = createNativeStackNavigator();

const PacksStack: FC = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const screenOptions = createStackScreenOptions(theme, insets);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PacksList"
        component={PacksScreen}
        options={screenOptions.mainScreenOptions(SCREENS.PACKS)}
      />
      <Stack.Screen
        name={SCREENS.INFO}
        component={InfoScreen}
        options={screenOptions.infoScreenOptions(SCREENS.PACKS)}
      />
    </Stack.Navigator>
  );
};

export default PacksStack;
