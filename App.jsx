/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import RootStack from '@screens/stacks/root-stack';

function App() {
  const flashMessageRef = useRef(null);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={['right', 'left', 'bottom']}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#000123'} />

        <RootStack />

        <FlashMessage ref={flashMessageRef} position={'top'} floating={true} />
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
