import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';


function Transaction({ navigation, route }) {
  const paraKey = route.params?.paraKey
  return(
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <ImageBackground 
            source={require('./backgroundTransaction.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
          <View style ={styles.content}>
            <View style ={styles.qrContainer}/>
            <View style ={styles.space1}/>
            <View style ={styles.amountBox}>
              <Text style={styles.text}>
                <Text>Amount:  €{route.params.paraKey}</Text>
              </Text>
            </View>
            <View style ={styles.space2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Approved', {paraKey})}>
                <Text style={styles.textConfirm}>OK</Text>
              </TouchableOpacity>
              {/* <View style ={styles.companyEntry}>
                <Text style={styles.text}>
                   {route.params.paraKey}
                </Text>
              </View> */}
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
  mainBody: {
      flexDirection: "column",
      backgroundColor: "powderblue",
      height: "75%",
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
  content: {
      //borderWidth: 5,
      //borderColor: "yellow",
      height: "80%",
      width: '80%',
      justifyContent: "center",
      alignItems: "center",
  },
  qrContainer: {
      borderWidth: 5,
      borderColor: "red",
      height: "50%",
      width: '80%',
      justifyContent: "center",
      alignItems: "center",
  },
  space1: {
    height: "15%",
    width: '100%',
    //borderWidth: 5,
    //borderColor: "red",
    padding: 5,
  },
  amountBox: {
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
    fontSize: 30,
    fontWeight: "bold",
    color: "midnightblue",
    padding: 15,
    //borderWidth: 5,
    //borderColor: "yellow",
  },
  space2: {
    height: "15%",
    width: '100%',
    //borderWidth: 5,
    //borderColor: "red",
    padding: 15,
  },
  textConfirm: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "midnightblue",
      //borderWidth: 5,
      //borderColor: "yellow",
  },
  companyEntry: {
      alignSelf: "center",
      backgroundColor: "white",
      height: "20%",
      width: '50%',
      borderWidth: 3,
      borderColor: "teal",
      padding: 15,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,   
  },
});

export default Transaction;