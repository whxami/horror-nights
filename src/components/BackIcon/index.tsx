import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BackIcon = (props: SvgProps) => (
  <Svg width={11} height={18} viewBox="0 0 11 18" fill="none" {...props}>
    <Path
      d="M10 1L2 9L10 17"
      stroke="#4D7661"
      strokeWidth={2}
      strokeMiterlimit={16}
    />
  </Svg>
);
export default BackIcon;
