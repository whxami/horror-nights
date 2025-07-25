import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const HeartIcon = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.92129 1L0 2.489V8.74131L7.99999 15L16 8.74131V2.489L10.0787 1L7.99999 3.78786L5.92129 1Z"
      fill="#FF2A6D"
    />
  </Svg>
);
export default HeartIcon;
