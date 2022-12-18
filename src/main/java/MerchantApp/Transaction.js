import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function Transaction({ navigation }) {
    return(
        <View style={styles.container}>
          <Header></Header>
          <View style ={styles.mainBody}>
            <View style ={styles.contents2}>
            <View style ={styles.QRcontainer}/>
            <View style ={styles.spaceHome}/>
              <View style ={styles.loginSignUpButton}>
                <Text style={styles.text2}>
                  <Text>€ Amount:</Text>
                </Text>
              </View>
              <View style ={styles.spaceLoginSignUp}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Approved')}>
                <Text style={styles.textConfirm}>OK</Text>
                </TouchableOpacity>
              <View style ={styles.companyEntry}/>
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
    QRcontainer: {
        borderWidth: 5,
        borderColor: "red",
        height: "50%",
        width: '80%',
        justifyContent: "center",
        alignItems: "center",
    },
    textConfirm: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        //borderWidth: 5,
        //borderColor: "yellow",
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
    spaceLoginSignUp: {
        height: "15%",
        width: '100%',
        //borderWidth: 5,
        //borderColor: "red",
        padding: 15,
    },
    companyEntry: {
        backgroundColor: "white",
        height: "15%",
        width: '100%',
        //borderWidth: 5,
        //borderColor: "red",
        padding: 15,
    },
    spaceHome: {
        height: "5%",
        width: '100%',
        //borderWidth: 5,
        //borderColor: "red",
        padding: 5,
    },
});

  export default Transaction;