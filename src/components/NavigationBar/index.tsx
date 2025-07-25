import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const CustomBottomNavbar = () => {
  const [activeTab, setActiveTab] = useState('Top');

  const tabs = [
    { name: 'Top', icon: 'star' },
    { name: 'Skins', icon: 'person' },
    { name: 'Packs', icon: 'folder' },
    { name: 'Servers', icon: 'dns' },
    { name: 'Wallpaper', icon: 'wallpaper' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Top':
        return <Text style={styles.contentText}>Top Content</Text>;
      case 'Skins':
        return <Text style={styles.contentText}>Skins Content</Text>;
      case 'Packs':
        return <Text style={styles.contentText}>Packs Content</Text>;
      case 'servers':
        return <Text style={styles.contentText}>Servers Content</Text>;
      case 'WallpaperIcon':
        return <Text style={styles.contentText}>Wallpaper Content</Text>;
      default:
        return <Text style={styles.contentText}>Default Content</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{renderContent()}</View>

      <View style={styles.navbar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={[
              styles.tabButton,
              activeTab === tab.name && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(tab.name)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.name && styles.activeTabText,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#2E2E2E',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
  },
  tabText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#4CAF50',
  },
});

export default CustomBottomNavbar;
