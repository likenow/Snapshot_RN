import * as React from 'react';
import { View } from 'react-native';
import {
    createBottomTabNavigator,
    BottomTabNavigationEventMap,
    BottomTabNavigationOptions,
 } from '@react-navigation/bottom-tabs';
import type {
    RouteConfig,
    DefaultNavigatorOptions,
    ParamListBase,
    TabNavigationState,
  } from '@react-navigation/core';

  import Home  from "../views/Home";
  
  type AppTabParamList = {
    Home: undefined;
    Notifications: undefined;
    Profile: undefined;
    Settings: undefined;
  };
  
  // generic tab routes type
  export type TabRoutesType<ParamList extends ParamListBase> = Array<
    RouteConfig<
      ParamList,
      keyof ParamList,
      TabNavigationState<ParamList>,
      BottomTabNavigationOptions,
      BottomTabNavigationEventMap
    >
  >;
  
  type AppTabRoutesType = TabRoutesType<AppTabParamList>;
  
  // the screen components
  // const Home = () => <View />;
  const Notifications = () => <View />;
  const Profile = () => <View />;
  const Settings = () => <View />;
  
  // strictly typed array of app tab routes
  const appTabRoutes: AppTabRoutesType = [
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'Notifications',
      component: Notifications,
    },
    {
      name: 'Profile',
      component: Profile,
    },
    {
      name: 'Settings',
      component: Settings,
    },
  ];
  
  // typing for tab navigator options
  type TabNavigatorOptions<ParamList extends ParamListBase> =
    DefaultNavigatorOptions<
      ParamList,
      TabNavigationState<ParamList>,
      BottomTabNavigationOptions,
      BottomTabNavigationEventMap
    >;
  
  // omit the children as it corresponds to tab screen
  const appTabNavigatorProps: Omit<
    TabNavigatorOptions<AppTabParamList>,
    'children'
  > = {
    initialRouteName: 'Home',
    screenOptions: {},
    // ...rest
  };

const Tab = createBottomTabNavigator<AppTabParamList>();

function TabBar() {
  return (
    <Tab.Navigator {...appTabNavigatorProps}>
      {appTabRoutes.map((tabRoute) => (
        <Tab.Screen key={tabRoute.name} {...tabRoute} />
      ))}
    </Tab.Navigator>
  );
}

export default TabBar;