import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ExpandableSearchHeader from 'components/ExpandableSearchHeader';
import GoBackHeader from 'components/GoBackHeader';
import { useThemedStyles } from 'theme/ThemeProvider';

import { HeaderProps } from './types';

import { createStyles } from './styles';

const Header: FC<HeaderProps> = (props) => {
  const { title, withSearch, withBackButton } = props;
  const insets = useSafeAreaInsets();
  const styles = useThemedStyles((theme) => createStyles(theme, insets));

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        {withSearch && (
          <TouchableOpacity style={styles.searchButton}>
            <ExpandableSearchHeader />
          </TouchableOpacity>
        )}
        {withBackButton && (
          <View style={styles.backButtonContainer}>
            <GoBackHeader />
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;
