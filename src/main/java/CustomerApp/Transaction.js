import { StatusBar } from 'expo-status-bar';
import React, { startTransition } from 'react';
import { ImageBackground, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function Transaction({ navigation }){
    return(
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.bodyContainer}>
          <ImageBackground 
              source={require('./backgroundTransaction.png')} 
              resizeMode= "stretch" 
              style={styles.background}>
            <View style={styles.contentContainer}>
              <View style={styles.qrContainer}></View>
              <View style={styles.space}></View>
              <View style ={styles.textBox}>
                <Text style={styles.text}>Scan QR Code</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Approved')}>
                <Text style={styles.textConfirm}>OK</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.space}></View>
            </View>
          </ImageBackground>
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
      borderWidth: 5,
      borderColor: "teal",
      borderTopWidth: 0,
    },
    background: {
      flexDirection: "column",
      height: "100%",
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
    qrContainer: {
      borderWidth: 5,
      borderColor: "red",
      height: "50%",
      width: '80%',
      justifyContent: "center",
      alignItems: "center",
    },
    textBox: {
      backgroundColor: "cadetblue",
      justifyContent: "center",
      alignItems: "center",
      height: "15%",
      width: '100%',
      borderWidth: 5,
      borderColor: "teal",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    text: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "midnightblue",
    },
    space: {
      height: "15%",
      width: '100%',
     // borderWidth: 5,
      //borderColor: "red",
      padding: 15,
    },
  });
  

  export default Transaction;