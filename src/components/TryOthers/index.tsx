import { FC } from 'react';
import { Text, View } from 'react-native';

import packsData from 'assets/packs/packs.json';
import skinsData from 'assets/skins/skins.json';
import PackGrid from 'components/PackGrid';
import SkinGrid from 'components/SkinGrid';
import { SCREENS } from 'const/screens';
import { useThemedStyles } from 'theme/ThemeProvider';
import { BaseItem } from 'types/baseItem';

import { TryOthersProps } from './types';

import { createStyles } from './styles';

const TryOthers: FC<TryOthersProps> = ({ type, mainId }) => {
  const styles = useThemedStyles(createStyles);

  const getFilteredData = (data: BaseItem[]) =>
    data.filter((item) => item.id !== mainId);

  const renderGrid = () => {
    switch (type) {
      case SCREENS.SKINS:
        return <SkinGrid skins={getFilteredData(skinsData)} />;
      case SCREENS.PACKS:
        return <PackGrid packs={getFilteredData(packsData)} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Text style={styles.textTitle}>I&#39;ll try the others</Text>
      {renderGrid()}
    </>
  );
};

export default TryOthers;
