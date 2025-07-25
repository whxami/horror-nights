import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SCREENS } from 'const/screens';

export interface InfoData {
  id: number;
  extraLikes: number;
  extraFavourites: number;
  extraFileWeight: string;
  rating: number;
  name: string;
}

export type RootTabParamList = {
  Top: undefined;
  Skins: undefined;
  Packs: undefined;
  Servers: undefined;
  Wallpapers: {
    type: SCREENS;
    allData: InfoData[];
    isCarousel: boolean;
  };
};

export interface InfoScreenParams {
  title?: string;
  type: SCREENS;
  data?: InfoData;
  isCarousel?: boolean;
  allData?: InfoData[];
}

export type RootStackParamList = {
  MainTabs: undefined;
  Info: InfoScreenParams;
};

export type TabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;
