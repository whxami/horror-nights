import { FC } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';

import HeartIcon from 'components/HeartIcon';
import { useThemedStyles } from 'theme/ThemeProvider';

import { createStyles } from './styles';

interface CardProps {
  id: number;
  name: string;
  extraLikes: number;
  image: ImageSourcePropType;
  onPress: (id: number) => void;
  size?: 'small' | 'large';
  isImageContain?: boolean;
}

const Card: FC<CardProps> = (props) => {
  const {
    id,
    name,
    extraLikes,
    onPress,
    size = 'small',
    image,
    isImageContain = true,
  } = props;
  const styles = useThemedStyles((theme) => createStyles(theme, size));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(id)}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={image}
          resizeMode={isImageContain ? 'contain' : 'cover'}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.skinName}>{name}</Text>
        <View style={styles.ratingContainer}>
          <HeartIcon width={16} height={16} />
          <Text style={styles.rating}>{extraLikes}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
