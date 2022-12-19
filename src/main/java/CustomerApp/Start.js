import { StatusBar } from 'expo-status-bar';
import React, { startTransition } from 'react';
import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function Start({ navigation }) {
    return(
      <View style={styles.container}>
         <Header></Header>
         <View style={styles.bodyContainer}>
          <View style={styles.contentContainer}>
            <View style ={styles.loginSignUpButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.loginSignUpText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceLoginSignUp}></View>
            <View style ={styles.loginSignUpButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Sign Up')}>
              <Text style={styles.loginSignUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceLoginSignUp}></View>
            <View style={styles.tappLogoContainer}>
              <Image
                style={styles.tappLogoimage}
                source={require('./TappLogo.png')} />
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
    tappHeaderlogoContainer: {
        flexDirection: "row",
        height: "100%",
        width: '22%',
        justifyContent: "flex-end",
        //borderWidth: 5,
        //borderColor: "black",
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
    loginSignUpText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
    },
    spaceLoginSignUp: {
        height: "15%",
        width: '100%',
        // borderWidth: 5,
        //borderColor: "red",
        padding: 15,
    },
    tappLogoContainer: {
        backgroundColor: "white",
        borderWidth: 5,
        borderColor: "teal",
        height: "40%",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    tappLogoimage: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
    },
});

export default Start;