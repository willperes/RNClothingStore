import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxProps,
  Icon,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@/components';

import { appTabBarProps } from './app-tab-bar-props';
import { AppTabBottomTabParamList } from './app-tab-navigator';

import { useAppSafeArea } from '@/hooks';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();

  return (
    <Box style={{ paddingBottom: bottom }} {...$boxWrapper}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem =
          appTabBarProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.name}
            {...$itemWrapper}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon
              size={24}
              color={isFocused ? 'primary100' : 'backgroundContrast50'}
              name={tabItem.icon}
            />
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  accessibilityRole: 'button',
  alignItems: 'center',
  style: { flex: 1 },
};

const $boxWrapper: BoxProps = {
  pt: 's12',
  flexDirection: 'row',
  backgroundColor: 'mainBackground',
};
