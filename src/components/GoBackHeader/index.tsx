import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import BackIcon from 'components/BackIcon';
import { useNavigation } from 'hooks/useNavigation';
import { useThemedStyles } from 'theme/ThemeProvider';

import { createStyles } from './styles';

const GoBackHeader: FC = () => {
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.iconContainer}
      activeOpacity={0.8}
    >
      <BackIcon width={8} height={16} />
    </TouchableOpacity>
  );
};

export default GoBackHeader;
