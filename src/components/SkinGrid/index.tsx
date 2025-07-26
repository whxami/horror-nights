import { FC } from 'react';
import { View } from 'react-native';

import SkinCard from 'components/Card';
import { SKIN_IMAGES } from 'const/images';
import { SCREENS } from 'const/screens';
import { useNavigation } from 'hooks/useNavigation';
import { useThemedStyles } from 'theme/ThemeProvider';
import { BaseItem } from 'types/baseItem';
import { InfoData } from 'types/navigationTypes';

import { createStyles } from './styles';

interface SkinGridProps {
  skins: BaseItem[];
}

const SkinGrid: FC<SkinGridProps> = (props) => {
  const { skins } = props;

  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation();

  const handleSkinPress = (skinData: InfoData) => {
    navigation.navigate(SCREENS.INFO, { type: SCREENS.SKINS, data: skinData });
  };

  return (
    <View style={styles.gridContainer}>
      {skins.map((skin, index) => (
        <View
          key={skin.id}
          style={[
            styles.cardContainer,
            {
              paddingRight: (index + 1) % 2 === 0 ? 0 : 6,
              paddingLeft: (index + 1) % 2 === 0 ? 6 : 0,
            },
          ]}
        >
          <SkinCard
            {...skin}
            image={SKIN_IMAGES[skin.id]}
            onPress={() => handleSkinPress(skin)}
          />
        </View>
      ))}
    </View>
  );
};

export default SkinGrid;
