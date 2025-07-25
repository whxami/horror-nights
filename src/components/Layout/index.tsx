import React, { FC, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import PacksIcon from 'components/PacksIcon';
import SearchIcon from 'components/SearchIcon';
import ServersIcon from 'components/ServersIcon';
import SkinsIcon from 'components/SkinsIcon';
import TopIcon from 'components/TopIcon';
import WallpaperIcon from 'components/WallpaperIcon';
import InfoScreen from 'screens/InfoScreen';
import PacksScreen from 'screens/PacksScreen';
import ServersScreen from 'screens/ServersScreen';
import SkinsScreen from 'screens/SkinsScreen';
import { useThemedStyles } from 'theme/ThemeProvider';

import { createStyles } from './styles';

const Layout: FC = () => {
  const styles = useThemedStyles(createStyles);

  const [activeTab, setActiveTab] = useState('Skins');

  const tabs = [
    { id: 'Top', name: 'Top', icon: TopIcon },
    { id: 'Skins', name: 'Skins', icon: SkinsIcon },
    { id: 'Packs', name: 'Packs', icon: PacksIcon },
    { id: 'servers', name: 'Servers', icon: ServersIcon },
    { id: 'WallpaperIcon', name: 'Wallpaper', icon: WallpaperIcon },
  ];

  const renderScreen = () => {
    switch (activeTab) {
      case 'Skins':
        return <SkinsScreen />;
      case 'servers':
        return <ServersScreen />;
      case 'Packs':
        return <PacksScreen />;
      case 'Top':
        return <InfoScreen />;
      default:
        return <SkinsScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2E5E4A" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>{activeTab}</Text>
        <TouchableOpacity style={styles.searchButton}>
          <SearchIcon width={18} height={18} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>{renderScreen()}</View>

      <View style={styles.bottomNav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.navItem,
              activeTab === tab.id && styles.activeNavItem,
            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <tab.icon />
            <Text
              style={[
                styles.navText,
                activeTab === tab.id && styles.activeNavText,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Layout;

