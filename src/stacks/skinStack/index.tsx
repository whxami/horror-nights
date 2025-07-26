import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SCREENS } from 'const/screens';
import InfoScreen from 'screens/InfoScreen';
import SkinsScreen from 'screens/SkinsScreen';
import { InfoScreenParams } from 'types/navigationTypes';

export type SkinsStackParamList = {
  SkinsList: undefined;
  Info: InfoScreenParams;
};

const Stack = createNativeStackNavigator<SkinsStackParamList>();

const SkinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SkinsList"
        component={SkinsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.INFO}
        component={InfoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SkinsStack;
