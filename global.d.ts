import { RootStackParamList } from 'hooks/useNavigation';

declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
