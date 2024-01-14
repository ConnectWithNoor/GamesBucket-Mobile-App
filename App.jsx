/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000123'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.mainTitle}>
          <Text style={styles.text}>Hello Developers!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    color: '#121320',
  },
});

export default App;
