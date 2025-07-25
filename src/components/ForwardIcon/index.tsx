import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ForwardIcon = (props: SvgProps) => (
  <Svg width={11} height={18} viewBox="0 0 11 18" fill="none" {...props}>
    <Path
      d="M1 1L9 9L1 17"
      stroke="#4D7661"
      strokeWidth={2}
      strokeMiterlimit={16}
    />
  </Svg>
);

export default ForwardIcon;
