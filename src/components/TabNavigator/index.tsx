import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import wallpapersData from 'assets/wallpapers/wallpapers.json';
import { SCREENS } from 'const/screens';
import InfoScreen from 'screens/InfoScreen';
import ServersScreen from 'screens/ServersScreen';
import packsStack from 'stacks/packsStack';
import SkinsStack from 'stacks/skinStack';
import { useTheme, useThemedStyles } from 'theme/ThemeProvider';
import { RootTabParamList } from 'types/navigationTypes';
import { createStackScreenOptions } from 'utils/createStackScreenOption';

import { getTabBarIcon } from './utils';

import { createTabStyles } from './styles';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator: FC = () => {
  const insets = useSafeAreaInsets();
  const styles = useThemedStyles((theme) => createTabStyles(theme, insets));
  const theme = useTheme();
  const screenOptions = createStackScreenOptions(theme, insets);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name, { focused, color, size }),
        tabBarActiveTintColor: styles.tabBarActive.color,
        tabBarInactiveTintColor: styles.tabBarInactive.color,
        tabBarActiveBackgroundColor: styles.tabBarActive.backgroundColor,
        tabBarItemStyle: styles.tabBarItem,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        sceneStyle: styles.sceneWrapper,
      })}
      initialRouteName={SCREENS.SKINS}
    >
      <Tab.Screen
        name={SCREENS.SKINS}
        component={SkinsStack}
        options={{
          title: SCREENS.SKINS,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={SCREENS.PACKS}
        component={packsStack}
        options={screenOptions.mainScreenOptions(SCREENS.PACKS)}
      />
      <Tab.Screen
        name={SCREENS.SERVERS}
        component={ServersScreen}
        options={screenOptions.mainScreenOptions(SCREENS.SERVERS)}
      />
      <Tab.Screen
        name={SCREENS.WALLPAPERS}
        component={InfoScreen}
        options={{
          title: SCREENS.WALLPAPERS,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: styles.headerTitle.color,
        }}
        initialParams={{
          type: SCREENS.WALLPAPERS,
          allData: wallpapersData,
          isCarousel: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
