import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Start'
import SignUp from './SignUp'
import Home from './Home'
import Transaction from './Transaction'
import Add from './AddCoin'
import Approved from './Approved'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initalRouteName="Start">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="Add Coin" component={Add} />
      <Stack.Screen name="Approved" component={Approved} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
