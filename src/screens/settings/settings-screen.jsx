import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/base';

const SettingsScreen = props => {
  const {navigation, route} = props;
  return (
    <View>
      <Text style={{color: 'red'}}>Hello</Text>
      <Text style={{color: 'red'}}> World</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
