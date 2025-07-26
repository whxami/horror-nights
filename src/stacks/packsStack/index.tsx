import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { SCREENS } from 'const/screens';
import InfoScreen from 'screens/InfoScreen';
import PacksScreen from 'screens/PacksScreen';

const Stack = createNativeStackNavigator();

const PacksStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PacksList"
        component={PacksScreen}
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

export default PacksStack;
