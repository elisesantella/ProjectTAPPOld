import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Start'
import SignUp from './SignUp'
import SignIn from './SignIn';
import Home from './Home'
import Transaction from './Transaction'
import Add from './AddCoin'
import Approved from './Approved'

//Creating stack Navigator for react navigation component
const Stack = createNativeStackNavigator();

//Creating the stacks for each page & removing default header
export default function App() {
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
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen
       options={{headerShown: false,
        headerStyle: {
          backgroundColor: '#2c365a',
        },
      }} 
      name="Add Coin" component={Add} />
      <Stack.Screen name="Approved" component={Approved} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
