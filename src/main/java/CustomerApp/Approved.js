import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';


function Approved({ navigation }) {
    return(
        <View style={styles.container}>
          <Header></Header>
          <View style ={styles.mainBody}>
            <View style ={styles.contents2}>
              <View style ={styles.loginSignUpButton}>
                <Text style={styles.text2}>
                  <Text>Transaction Approved</Text>
                </Text>
              </View>
              <View style ={styles.spaceHome}/>
              <View style ={styles.loginSignUpButton}>
                <Text style={styles.text2}>
                  <Text>Amount Of:</Text>
                </Text>
              </View>
              <View style ={styles.spaceLoginSignUp}>
              <View style ={styles.companyEntry}/>
              </View> 
              <View style ={styles.spaceLoginSignUp}/>
                <View style ={styles.buttonReturn}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textConfirm}>Return to Home</Text>
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
        borderWidth: 5,
        borderColor: "teal",
        borderTopWidth: 0,
    },
    contents2: {
        //borderWidth: 5,
        //borderColor: "yellow",
        height: "80%",
        width: '80%',
        justifyContent: "center",
        alignItems: "center",
    },
    buttonReturn: {
        backgroundColor: "teal",
        borderWidth: 5,
        borderColor: "darkslategrey",
        height: "15%",
        width: '60%',
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
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
        color: "midnightblue",
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
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
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
        borderWidth: 3,
        borderColor: "teal",
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    spaceHome: {
        height: "5%",
        width: '100%',
        //borderWidth: 5,
        //borderColor: "red",
        padding: 5,
    },
});
  

  export default Approved;