import React, { FC } from 'react';
import { ScrollView } from 'react-native';

import skinsData from 'assets/skins/skins.json';
import Header from 'components/Header';
import NothingFound from 'components/NothingFound';
import SkinGrid from 'components/SkinGrid';
import { SCREENS } from 'const/screens';
import { useFilteredData } from 'hooks/useFilteredData';
import { useThemedStyles } from 'theme/ThemeProvider';

import { createStyles } from './styles';

const SkinsScreen: FC = () => {
  const styles = useThemedStyles(createStyles);
  const filteredSkinsData = useFilteredData(skinsData);

  if (!filteredSkinsData.length) {
    return <NothingFound />;
  }

  return (
    <>
      <Header title={SCREENS.SKINS} withSearch />
      <ScrollView style={styles.container}>
        <SkinGrid skins={filteredSkinsData} />
      </ScrollView>
    </>
  );
};

export default SkinsScreen;
