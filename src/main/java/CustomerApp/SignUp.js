import { StatusBar } from 'expo-status-bar';
import React, { startTransition } from 'react';
import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function SignUp({ navigation }){
    return(
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.bodyContainer}>
          <View style={styles.contentContainer}>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.loginSignUpText}>Enter Username:</Text>
            </View>
            <View style={styles.spaceLoginSignUp}>
              <View style={styles.entrySpace}></View>
            </View>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.loginSignUpText}>Enter Password:</Text>
            </View>
            <View style={styles.spaceLoginSignUp}>
              <View style={styles.entrySpace}></View>
            </View>
            <View style={styles.confirmButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Start')}>
              <Text style={styles.whiteText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer></Footer>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "column",
    },
    bodyContainer: {
    flexDirection: "column",
    backgroundColor: "powderblue",
    height: "70%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    },
    contentContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: "80%",
      width: '65%',
      //borderWidth: 5,
      //borderColor: "teal",
    },
    loginSignUpButton: {
      backgroundColor: "cadetblue",
      justifyContent: "center",
      alignItems: "center",
      height: "15%",
      width: '100%',
      borderWidth: 5,
      borderColor: "teal",
    },
    confirmButton: {
      backgroundColor: "teal",
      justifyContent: "center",
      alignItems: "center",
      height: "18%",
      width: '55%',
      borderWidth: 5,
      borderColor: "darkslategrey",
    },
    loginSignUpText: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "black",
    },
    whiteText: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
    },
    spaceLoginSignUp: {
      height: "15%",
      width: '100%',
     // borderWidth: 5,
      //borderColor: "red",
      padding: 15,
    },
    entrySpace: {
      backgroundColor: "white",
      height: "15%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "red",
      padding: 15,
    },
  });

  export default SignUp;
