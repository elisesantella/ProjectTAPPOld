import { StatusBar } from 'expo-status-bar';
import React, { startTransition } from 'react';
import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, SafeAreaView, TextInput, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function AddCoin({ navigation }){

  const [number, onChangeNumber] = React.useState(null);

    return(
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.bodyContainer}>
          <View style={styles.contentContainer}>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.dateText}>Enter Coin Amount:</Text>
            </View>
            <View style={styles.spacebetween}></View>
              <SafeAreaView>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="useless placeholder"
                  keyboardType="numeric"
              />
                </SafeAreaView>
            <View style={styles.spacebetween}></View>
            <View style={styles.confirmButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.whiteText}>Approve</Text>
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
    whiteText: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
    },
    dateText: {
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
    spacebetween: {
      height: "5%",
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
    input: {
      height: 50,
      margin: 12,
      borderWidth: 5,
      padding: 10,
      borderColor: "teal",
      backgroundColor: "white",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
  });


  export default AddCoin;
