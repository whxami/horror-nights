import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const DownloadIcon = (props: SvgProps) => (
  <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
    <Path
      d="M10.5 2.5V12.4702M6.33337 8.75L10.5 12.9167L14.6667 8.75"
      stroke="#50B900"
    />
    <Path d="M18 14.1666L17.1667 16.6666H3.83333L3 14.1666" stroke="#50B900" />
  </Svg>
);
export default DownloadIcon;
