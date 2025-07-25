import { FC } from 'react';
import { Text, View } from 'react-native';

import { useThemedStyles } from 'theme/ThemeProvider';

import { createStyles } from './styles';

const NothingFound: FC = () => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nothing Found</Text>
    </View>
  );
};

export default NothingFound;
