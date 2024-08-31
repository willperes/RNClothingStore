import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@/screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NotificationsScreen: undefined;
  OrdersScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tab.Screen name={'NotificationsScreen'} component={HomeScreen} />
      <Tab.Screen name={'OrdersScreen'} component={HomeScreen} />
      <Tab.Screen name={'ProfileScreen'} component={HomeScreen} />
    </Tab.Navigator>
  );
}
