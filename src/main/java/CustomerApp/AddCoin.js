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
                 placeholder="Enter Amount"
                 placeholderTextColor="lightsteelblue"
                 keyboardType="default"
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
    borderWidth: 5,
    borderColor: "teal",
    borderTopWidth: 0,
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
      borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    },
    confirmButton: {
      backgroundColor: "teal",
      justifyContent: "center",
      alignItems: "center",
      height: "18%",
      width: '55%',
      borderWidth: 5,
      borderColor: "darkslategrey",
      borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
      color: "midnightblue",
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
      width: 200,
      margin: 12,
      borderWidth: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      padding: 10,
      borderColor: "teal",
      backgroundColor: "white",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "midnightblue",
    },
  });
  

  export default AddCoin;
