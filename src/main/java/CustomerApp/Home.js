import { StatusBar } from 'expo-status-bar';
import React, { startTransition } from 'react';
import { ImageBackground, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function Home({ navigation }){
    return(
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.bodyContainer}>
        <ImageBackground 
            source={require('./backgroundHome.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
          <View style={styles.contentContainer}>
            <View style={styles.dateContainer}>
              <View style={styles.dateSpace}></View>
              <View style={styles.dateTextContainer}>
               <Text style={styles.dateText}>Date:</Text>
              </View>
            </View>
  
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.dateText}>Balance:</Text>
            </View>
            <View style={styles.spaceHome}>
              <View style={styles.entrySpace}></View>
            </View>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.loginSignUpText}>Recent Transactions:</Text>
            </View>
            <View style={styles.transactionSpace}></View>
            <View style={styles.dateContainer}>
              <View style={styles.paymentButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Transaction')}>
              <Text style={styles.homeText}>Payment</Text>
              </TouchableOpacity>
              </View> 
              <View style={styles.paymentSpace}></View>
              <View style={styles.paymentButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Add Coin')}>
              <Text style={styles.homeText}>Add Coin</Text>
              </TouchableOpacity>
              </View> 
            </View>
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
    dateTextContainer: {
      backgroundColor: "aliceblue",
      flexDirection: "row",
      height: "85%",
      width: '40%',
      borderWidth: 2,
      borderColor: "teal",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    dateContainer: {
      flexDirection: "row",
      height: "15%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "black",
    },
    loginSignUpButton: {
      backgroundColor: "cadetblue",
      justifyContent: "center",
      alignItems: "center",
      height: "19%",
      width: '100%',
      borderWidth: 5,
      borderColor: "teal",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    paymentButton: {
      backgroundColor: "cadetblue",
      borderWidth: 5,
      borderColor: "teal",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "100%",
      width: '48%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    addCoinButton: {
      backgroundColor: "cadetblue",
      borderWidth: 5,
      borderColor: "teal",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100%",
      width: '48%',
    },
    loginSignUpText: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "midnightblue",
    },
    dateText: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "midnightblue",
    },
    homeText: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "midnightblue",
      padding: 10,
    },
    dateSpace: {
      flexDirection: "row",
      height: "100%",
      width: '60%',
      justifyContent: "flex-start",
      //borderWidth: 5,
      //borderColor: "blue",
    },
    spaceHome: {
      height: "10%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "red",
      padding: 5,
    },
    entrySpace: {
      backgroundColor: "white",
      height: "15%",
      width: '100%',
      borderWidth: 3,
      borderColor: "teal",
      padding: 15,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    transactionSpace: {
      backgroundColor: "white",
      height: "30%",
      width: '90%',
      borderWidth: 2,
      borderColor: "black",
      margin: 15,
    },
    paymentSpace: {
      flexDirection: "row",
      height: "100%",
      width: '5%',
      justifyContent: "center",
      //borderWidth: 5,
      //borderColor: "blue",
    },
  });
  

export default Home;