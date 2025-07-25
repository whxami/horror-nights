import React, { ReactElement } from 'react';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

import PacksIcon from 'components/PacksIcon';
import ServersIcon from 'components/ServersIcon';
import SkinsIcon from 'components/SkinsIcon';
import TopIcon from 'components/TopIcon';
import WallpaperIcon from 'components/WallpaperIcon';
import { RootTabParamList } from 'types/navigationTypes';

import { TabBarIconProps } from './types';

export const getTabBarIcon = (
  routeName: keyof RootTabParamList,
  { focused, color, size }: TabBarIconProps,
): ReactElement => {
  const iconProps = {
    width: size,
    height: size,
    color: focused ? color : color,
  };

  switch (routeName) {
    case 'Top':
      return <TopIcon />;
    case 'Skins':
      return <SkinsIcon {...iconProps} />;
    case 'Packs':
      return <PacksIcon {...iconProps} />;
    case 'Servers':
      return <ServersIcon {...iconProps} />;
    case 'Wallpapers':
      return <WallpaperIcon {...iconProps} />;
    default:
      return <SkinsIcon {...iconProps} />;
  }
};

export const readAssetFile = async (relativePath: string): Promise<string> => {
  if (Platform.OS === 'android') {
    const base64 = await RNFS.readFileAssets(relativePath, 'base64');
    const tempPath = `${RNFS.CachesDirectoryPath}/${relativePath}`;
    await RNFS.writeFile(tempPath, base64, 'base64');

    return tempPath;
  }

  const fullPath = `${RNFS.MainBundlePath}/${relativePath}`;

  return fullPath;
};
