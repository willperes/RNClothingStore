import { IconProps } from '@/components';

import { AppTabBottomTabParamList } from './app-tab-navigator';

type AppTabBarProps = {
  icon: IconProps['name'];
};

export const appTabBarProps: Record<
  keyof AppTabBottomTabParamList,
  AppTabBarProps
> = {
  HomeScreen: {
    icon: 'homeIcon',
  },
  NotificationsScreen: {
    icon: 'notificationBellIcon',
  },
  OrdersScreen: {
    icon: 'receiptIcon',
  },
  ProfileScreen: {
    icon: 'profileIcon',
  },
};
