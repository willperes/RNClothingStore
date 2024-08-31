import React from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppTabBottomTabParamList, AppTabNavigator } from './app-tab-navigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'AppTabNavigator'} component={AppTabNavigator} />
    </Stack.Navigator>
  );
}
