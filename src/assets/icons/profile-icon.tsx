import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { BaseIconProps } from '@/components';

export function ProfileIcon({ size = 20, color = 'black' }: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.68 3.96C16.16 4.67 16.4401 5.52 16.4401 6.44C16.4301 8.84 14.54 10.79 12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.62005 10.8 7.83005 9.11 7.59005 6.95C7.30005 4.38 9.41005 2 11.99 2M6.99005 14.56C4.57005 16.18 4.57005 18.82 6.99005 20.43C9.74005 22.27 14.25 22.27 17 20.43C19.42 18.81 19.42 16.17 17 14.56C14.27 12.73 9.76005 12.73 6.99005 14.56Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
