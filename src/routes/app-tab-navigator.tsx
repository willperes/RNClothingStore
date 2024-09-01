import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { AppTabBar } from './app-tab-bar';

import { HomeScreen } from '@/screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NotificationsScreen: undefined;
  OrdersScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tab.Screen name={'NotificationsScreen'} component={HomeScreen} />
      <Tab.Screen name={'OrdersScreen'} component={HomeScreen} />
      <Tab.Screen name={'ProfileScreen'} component={HomeScreen} />
    </Tab.Navigator>
  );
}
