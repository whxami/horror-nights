import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SearchIcon = (props: SvgProps) => {
  const { fill, color } = props;

  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke={color || '#4D7661'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 19L15 15"
        stroke={color || '#4D7661'}
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
