/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from '@screens/stacks/main-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={['right', 'left', 'bottom']}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#000123'} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    color: '#121320',
    fontFamily: 'Mulish, sans-serif',
  },
});

export default App;
