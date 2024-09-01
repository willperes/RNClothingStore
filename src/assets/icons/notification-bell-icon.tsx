import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { BaseIconProps } from '@/components';

export function NotificationBellIcon({
  size = 20,
  color = 'black',
}: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.6667 6.441V9.771M21.2567 15.17C21.9867 16.39 21.4067 17.97 20.0567 18.42C15.2754 20.01 10.108 20.01 5.32668 18.42C3.88668 17.94 3.33668 16.48 4.12668 15.17L5.39668 13.05C5.74668 12.47 6.02668 11.44 6.02668 10.77V8.67C6.02537 7.79456 6.19666 6.92744 6.53077 6.11826C6.86488 5.30907 7.35524 4.5737 7.97381 3.9542C8.59238 3.33471 9.32702 2.84324 10.1357 2.50792C10.9444 2.1726 11.8112 2 12.6867 2C16.3467 2 19.3467 5 19.3467 8.66V10.76C19.3467 10.94 19.3667 11.14 19.3967 11.35"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M15.9967 18.82C15.9967 20.65 14.4967 22.15 12.6667 22.15C11.7567 22.15 10.9167 21.77 10.3167 21.17C9.71667 20.57 9.33667 19.73 9.33667 18.82"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
}
