import { Platform, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { STATIC_DATA, APP_THEME } from '@assets/constants';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Live"
      screenOptions={{
        tabBarActiveTintColor: APP_THEME.COLORS.appYellow,
        tabBarInactiveTintColor: APP_THEME.COLORS.appGray,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: {
          marginBottom: Number(`${APP_THEME.SIZES.xs * -1}`),
        },
        tabBarLabelStyle: {
          fontSize: Number(APP_THEME.SIZES.sm),
          fontFamily: APP_THEME.FONTS.nm,
        },
        tabBarStyle: {
          backgroundColor: APP_THEME.COLORS.appSecondary,
          paddingBottom: Number(APP_THEME.SIZES.sm),
          shadowColor: APP_THEME.COLORS.appPrimary,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          borderTopWidth: 0,
          height:
            Platform.OS === 'android'
              ? Number(APP_THEME.SIZES.HEIGHT * 0.09)
              : Number(APP_THEME.SIZES.HEIGHT * 0.1),
        },
      }}>
      {STATIC_DATA.bottomTabsList.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (focused ? tab.actionIcon : tab.icon),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
