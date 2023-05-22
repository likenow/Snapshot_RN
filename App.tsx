import React from 'react';
import { useColorScheme } from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import TabBar from './src/navigation/TabNavigator';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
const client = new Client({
  url: 'https://testnet.snapshot.org/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider value={client}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <TabBar />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
