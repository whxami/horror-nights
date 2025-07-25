import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CloseIcon = (props: SvgProps) => (
  <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <Path
      d="M1.5 1L9.5 9L14 13.5"
      stroke="#4D7661"
      strokeWidth={2}
      strokeMiterlimit={16}
    />
    <Path
      d="M14 1L6 9L1.5 13.5"
      stroke="#4D7661"
      strokeWidth={2}
      strokeMiterlimit={16}
    />
  </Svg>
);
export default CloseIcon;
