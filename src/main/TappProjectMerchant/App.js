import React, {Component} from 'react';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Start from './Start';
import Transaction from './Transaction';
import Approved from './Approved';
import Amount from './Amount';

//Creating stack Navigator for react navigation component
const Stack = createNativeStackNavigator();

//Creating the stacks for each page & removing default header
export default function App() 
{
  return (
    <NavigationContainer>
    <Stack.Navigator initalRouteName="Start">
      <Stack.Screen
      options={{headerShown: false,
        headerStyle: {
          backgroundColor: '#2c365a',
        },
      }}
       name="Start" component={Start} />
      <Stack.Screen 
        options={{headerShown: false,
          headerStyle: {
            backgroundColor: '#2c365a',
          },
        }}
        name="SignUp" component={SignUp} />
      <Stack.Screen
       options={{headerShown: false,
        headerStyle: {
          backgroundColor: '#2c365a',
        },
      }}
       name="SignIn" component={SignIn} />
      <Stack.Screen 
      options={{headerShown: false,
        headerStyle: {
          backgroundColor: '#2c365a',
        },
      }}
      name="Home" component={Home} />
      <Stack.Screen 
      options={{headerShown: false,
        headerStyle: {
          backgroundColor: '#2c365a',
        },
      }}
      name="Amount" component={Amount} />
      <Stack.Screen 
      options={{headerShown: false,
        headerStyle: {
          backgroundColor: '#2c365a',
        },
      }}
      name="Transaction" component={Transaction} />
      {/* <Stack.Screen name="Approved" component={Approved} /> */}
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
