import React from 'react';
import { Pressable } from 'react-native';

import {
  HomeIcon,
  NotificationBellIcon,
  ProfileIcon,
  ReceiptIcon,
} from '@/assets';
import { useAppTheme } from '@/hooks';
import { ThemeColor } from '@/theme';

export type BaseIconProps = {
  size?: number;
  color?: string;
  fillColor?: string;
};

export interface IconProps {
  name: IconName;
  color?: ThemeColor;
  fillColor?: ThemeColor;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast100',
  fillColor = 'mainBackground',
  size,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();

  const SVGIcon = iconRegistry[name];
  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor: colors[fillColor],
  };

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  homeIcon: HomeIcon,
  notificationBellIcon: NotificationBellIcon,
  profileIcon: ProfileIcon,
  receiptIcon: ReceiptIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
