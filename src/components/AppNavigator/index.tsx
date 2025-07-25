import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import TabNavigator from 'components/TabNavigator';
import { RootStackParamList } from 'types/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
