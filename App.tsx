import React from 'react';
import { useColorScheme } from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import TabBar from './src/navigation/TabNavigator';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <TabBar />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
