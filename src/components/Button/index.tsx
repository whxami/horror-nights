import { FC, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { useThemedStyles } from 'theme/ThemeProvider';

import { createStyles } from './styles';

interface ButtonProps {
  size: 'medium' | 'large';
  title: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { size, title, onPress } = props;
  const [isPressed, setIsPressed] = useState(false);

  const styles = useThemedStyles((theme) => createStyles(theme, size));

  return (
    <View style={[styles.outerShadow, isPressed && styles.outerShadowPressed]}>
      <View
        style={[styles.innerShadow, isPressed && styles.innerShadowPressed]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          style={[styles.button, isPressed && styles.buttonPressed]}
          onPress={onPress}
        >
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;
