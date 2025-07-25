import { FC } from 'react';
import { ScrollView, View } from 'react-native';

import packsData from 'assets/packs/packs.json';
import Card from 'components/Card';
import NothingFound from 'components/NothingFound';
import { PACK_IMAGES } from 'const/images';
import { SCREENS } from 'const/screens';
import { useFilteredData } from 'hooks/useFilteredData';
import { useNavigation } from 'hooks/useNavigation';
import { useThemedStyles } from 'theme/ThemeProvider';
import { InfoData } from 'types/navigationTypes';

import { createStyles } from './styles';

const PacksScreen: FC = () => {
  const styles = useThemedStyles(createStyles);
  const filteredPacksData = useFilteredData(packsData);
  const navigation = useNavigation();

  if (!filteredPacksData.length) {
    return <NothingFound />;
  }

  const handlePackPress = (packData: InfoData) => {
    navigation.navigate(SCREENS.INFO, { type: SCREENS.PACKS, data: packData });
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        {filteredPacksData.map((pack) => (
          <Card
            key={pack.id}
            {...pack}
            size="large"
            onPress={() => {
              handlePackPress(pack);
            }}
            image={PACK_IMAGES[pack.id]}
            isImageContain={false}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default PacksScreen;
