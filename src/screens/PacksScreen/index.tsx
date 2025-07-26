import { FC } from 'react';
import { ScrollView, View } from 'react-native';

import packsData from 'assets/packs/packs.json';
import Header from 'components/Header';
import NothingFound from 'components/NothingFound';
import PackGrid from 'components/PackGrid';
import { SCREENS } from 'const/screens';
import { useFilteredData } from 'hooks/useFilteredData';
import { useThemedStyles } from 'theme/ThemeProvider';

import { createStyles } from './styles';

const PacksScreen: FC = () => {
  const styles = useThemedStyles(createStyles);
  const filteredPacksData = useFilteredData(packsData);

  if (!filteredPacksData.length) {
    return <NothingFound />;
  }

  return (
    <>
      <Header title={SCREENS.PACKS} withSearch />
      <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <PackGrid packs={filteredPacksData} />
        </View>
      </ScrollView>
    </>
  );
};

export default PacksScreen;
