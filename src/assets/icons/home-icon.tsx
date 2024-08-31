import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { BaseIconProps } from '@/components';

export function HomeIcon({ size = 20, color = 'black' }: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 10.498C22 9.288 21.19 7.738 20.2 7.048L14.02 2.718C12.62 1.738 10.37 1.788 9.02 2.838L3.63 7.038C2.73 7.738 2 9.228 2 10.358V17.768C2 20.088 3.89 21.988 6.21 21.988H17.79C20.11 21.988 22 20.088 22 17.778V14.678M12 17.988V14.988"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
