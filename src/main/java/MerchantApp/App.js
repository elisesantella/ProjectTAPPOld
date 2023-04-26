import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, SafeAreaView, TextInput, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Start from './Start';
import Transaction from './Transaction';
import Approved from './Approved';
import Amount from './Amount';


const Stack = createNativeStackNavigator();


export default function App() 
{

//   handlePress()
//   {
//   fetch('http://10.222.22.22:3000/',{
//     method: 'POST',
//     body: JSON.stringify({
//       a:'hello'
//     }),
//     headers:{"Content-Type": "application/json"}
//   })
//   .then(function(response){
//     return response.json()
//   }).catch(error => console.log(error));
//   }

  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Amount/>
    // </View>
    <NavigationContainer>
    <Stack.Navigator initalRouteName="Start">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Amount" component={Amount} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="Approved" component={Approved} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
});
