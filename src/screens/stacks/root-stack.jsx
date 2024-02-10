import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from '@screens/stacks/main-stack';
import GiveawayDetails from '@screens/live/giveaway-details';
import BookMarkScreen from '@screens/settings/bookmark-screen';
import WebviewScreen from '@components/webview/webview-screen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainStack} />

        {/* Live Giveaway Screen */}
        <Stack.Screen name="GiveawayDetails" component={GiveawayDetails} />

        {/* My Bookmarks Screen */}
        <Stack.Screen name="MyBookmarks" component={BookMarkScreen} />

        {/* WebView */}
        <Stack.Screen name="WebViewScreen" component={WebviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
