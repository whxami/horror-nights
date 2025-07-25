import { useNavigation as useRNNavigation } from '@react-navigation/native';

import { TabNavigationProp } from '../../types/navigationTypes';

export const useNavigation = () => {
  return useRNNavigation<TabNavigationProp>();
};
