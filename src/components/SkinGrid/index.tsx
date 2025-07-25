import { FC } from 'react';
import { Text, View } from 'react-native';

import SkinCard from 'components/Card';
import { SKIN_IMAGES } from 'const/images';
import { SCREENS } from 'const/screens';
import { useNavigation } from 'hooks/useNavigation';
import { useThemedStyles } from 'theme/ThemeProvider';
import { InfoData } from 'types/navigationTypes';

import { createStyles } from './styles';

export interface SkinData {
  id: number;
  name: string;
  description: string;
  extraLikes: number;
  extraFavourites: number;
  extraDownloads: number;
  extraFileWeight: string;
  rating: number;
}

interface SkinGridProps {
  skins: SkinData[];
  title?: string;
}

const SkinGrid: FC<SkinGridProps> = (props) => {
  const { skins, title } = props;

  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation();

  const handleSkinPress = (skinData: InfoData) => {
    navigation.navigate(SCREENS.INFO, { type: SCREENS.SKINS, data: skinData });
  };

  return (
    <View>
      {title && <Text style={styles.textTitle}>{title}</Text>}
      <View style={styles.gridContainer}>
        {skins.map((skin) => (
          <View key={skin.id} style={styles.cardContainer}>
            <SkinCard
              {...skin}
              image={SKIN_IMAGES[skin.id]}
              onPress={() => handleSkinPress(skin)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default SkinGrid;
