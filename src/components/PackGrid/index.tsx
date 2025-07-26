import { FC } from 'react';
import { View } from 'react-native';

import Card from 'components/Card';
import { PACK_IMAGES } from 'const/images';
import { SCREENS } from 'const/screens';
import { useNavigation } from 'hooks/useNavigation';
import { useThemedStyles } from 'theme/ThemeProvider';
import { InfoData } from 'types/navigationTypes';

import { PackGridProps } from './types';

import { createStyles } from './styles';

const PackGrid: FC<PackGridProps> = (props) => {
  const { packs } = props;
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation();

  const handlePackPress = (packData: InfoData) => {
    navigation.navigate(SCREENS.INFO, { type: SCREENS.PACKS, data: packData });
  };

  return (
    <View style={styles.container}>
      {packs.map((pack) => (
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
  );
};

export default PackGrid;
