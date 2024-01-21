import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from '@rneui/base';
import { APP_THEME } from '@assets/constants';

const HomeScreen = props => {
  return (
    <View style={APP_THEME.STYLES.container}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() =>
          navigation.navigate('Settings', {
            title: 'Hello',
            message: 'Developers',
          })
        }>
        Go to Settings
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
