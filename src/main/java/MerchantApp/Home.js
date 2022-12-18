import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';


function Home({ navigation }) {
    return(
      <View style={styles.container}>
        <Header></Header>
        <View style ={styles.mainBody}>
          <View style ={styles.contents2}>
          <View style ={styles.DateContainer}>
          <View style ={styles.spaceDate}/>
            <View style ={styles.Date}>
            <Text style={styles.text2}>
              <Text>DATE:</Text>
            </Text>
            </View>
          </View>
          <View style ={styles.spaceHome}/>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.text2}>
                <Text>Recent Transactions:</Text>
              </Text>
            </View>
            <View style ={styles.spaceHome}/>
            <View style ={styles.transitionEntry}/>
            <View style ={styles.spaceHome}/>
              <View style ={styles.buttonMakeSale}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Amount')}>
              <Text style={styles.text}>Make Sale</Text>
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
    mainBody: {
      flexDirection: "column",
      backgroundColor: "powderblue",
      height: "70%",
      width: '100%',
      justifyContent: "center",
      alignItems: "center",
    },
    contents2: {
      //borderWidth: 5,
      //borderColor: "yellow",
      height: "80%",
      width: '80%',
      justifyContent: "center",
      alignItems: "center",
    },
    buttonMakeSale: {
      backgroundColor: "cadetblue",
      borderWidth: 5,
      borderColor: "teal",
      height: "15%",
      width: '50%',
      justifyContent: "center",
      alignItems: "center",
    },
    text2: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "black",
      //borderWidth: 5,
      //borderColor: "yellow",
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
    text: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "black",
      //borderWidth: 5,
      //borderColor: "yellow",
    },
    transitionEntry: {
      backgroundColor: "white",
      height: "45%",
      width: '90%',
      borderWidth: 2,
      borderColor: "black",
      padding: 15,
    },
    spaceHome: {
      height: "5%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "red",
      padding: 5,
    },
    spaceDate: {
      flexDirection: "row",
      height: "100%",
      width: '60%',
      justifyContent: "flex-start",
      //borderWidth: 5,
      //borderColor: "blue",
    },
    DateContainer: {
      flexDirection: "row",
      height: "10%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "black",
    },
    Date: {
      backgroundColor: "aliceblue",
      flexDirection: "row",
      height: "100%",
      width: '40%',
      borderWidth: 2,
      borderColor: "teal",
      justifyContent: "center",
      alignItems: "center",
    },
    textDate: {
      textAlign: "center",
      fontSize: 10,
      fontWeight: "bold",
      color: "black",
      //borderWidth: 5,
      //borderColor: "yellow",
    },
  });


  export default Home;