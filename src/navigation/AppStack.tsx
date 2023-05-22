import type {
  RouteConfig,
  DefaultNavigatorOptions,
  ParamListBase,
  StackNavigationState,
} from '@react-navigation/core';
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
} from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';

type AppStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Settings: undefined;
};

// generic stack routes type
export type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
>;

type AppStackRoutesType = StackRoutesType<AppStackParamList>;

// mocking the screen components for the sake of example
const Home = () => <View />;
const Notifications = () => <View />;
const Profile = () => <View />;
const Settings = () => <View />;

// strictly typed array of app stack routes
const appStackRoutes: AppStackRoutesType = [
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

// generic typing for stack navigator options
type StackNavigatorOptions<ParamList extends ParamListBase> =
  DefaultNavigatorOptions<
    ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >;

// omit the children as it corresponds to stack screen
const appStackNavigatorProps: Omit<
  StackNavigatorOptions<AppStackParamList>,
  'children'
> = {
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
    cardOverlayEnabled: true,
    gestureEnabled: false,
    cardStyle: {
      backgroundColor: 'royalblue',
    },
    headerLeftContainerStyle: {
      backgroundColor: 'firebrick',
    },
    presentation: 'modal',
    headerTitleStyle: {
      fontSize: 24,
      color: 'olivedrab',
    },
  },
  // ...rest
};

const Stack = createStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator {...appStackNavigatorProps}>
      {appStackRoutes.map((stackRoute) => (
        <Stack.Screen key={stackRoute.name} {...stackRoute} />
      ))}
    </Stack.Navigator>
  );
}

export default AppStack;



// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import TabBar from './src/navigation/TabNavigator';

// // type SectionProps = PropsWithChildren<{
// //   title: string;
// // }>;

// // function Section({children, title}: SectionProps): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
//       <TabBar />
//     </NavigationContainer>
//     // <SafeAreaView style={backgroundStyle}>
//     //   <StatusBar
//     //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//     //     backgroundColor={backgroundStyle.backgroundColor}
//     //   />
//     //   <ScrollView
//     //     contentInsetAdjustmentBehavior="automatic"
//     //     style={backgroundStyle}>
//     //     <Header />
//     //     <View
//     //       style={{
//     //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
//     //       }}>
//     //       <Section title="Step One">
//     //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//     //         screen and then come back to see your edits.
//     //       </Section>
//     //       <Section title="See Your Changes">
//     //         <ReloadInstructions />
//     //       </Section>
//     //       <Section title="Debug">
//     //         <DebugInstructions />
//     //       </Section>
//     //       <Section title="Learn More">
//     //         Read the docs to discover what to do next:
//     //       </Section>
//     //       <LearnMoreLinks />
//     //     </View>
//     //   </ScrollView>
//     // </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
