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
import {Button} from '@rneui/base';
import SplashScreen from 'react-native-splash-screen';
import {EmojiHappy} from 'iconsax-react-native';

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
          <Button>
            <EmojiHappy variant="Broken" color="#000" size={54} />
          </Button>
          <Button type="outline" title="Outline" />
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
