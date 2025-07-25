import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const StarIcon = (props: SvgProps) => (
  <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
    <Path
      d="M11.6578 0.833374H9.34227L7.62055 6.15175L2.04892 6.15176L1.33337 8.36206L5.84093 11.649L4.11922 16.9673L5.99255 18.3334L10.5001 15.0465L15.0076 18.3334L16.8809 16.9673L15.1591 11.649L19.6667 8.36205L18.9511 6.15175H13.3795L11.6578 0.833374Z"
      fill="#FFBB00"
    />
  </Svg>
);
export default StarIcon;
