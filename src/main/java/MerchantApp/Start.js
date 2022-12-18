import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function Start({ navigation }) {
    return(
        <View style={styles.container}>
            <Header></Header>
            <View style ={styles.mainBody}>
                <View style ={styles.contentOne}>
                    <View style ={styles.loginSignUpButton}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style ={styles.spaceLoginSignUp}/>
                    <View style ={styles.loginSignUpButton}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                <View style ={styles.spaceLoginSignUp}/>
                    <View style ={styles.imageContainer}>
                        <View style ={styles.Logoimage}>
                            <Image
                                style={styles.Logoimage}
                                source={require('./TappLogo.png')} />
                        </View>
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
    contentOne: {
        //borderWidth: 5,
        //borderColor: "teal",
        height: "80%",
        width: '60%',
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
    spaceLoginSignUp: {
        height: "15%",
        width: '100%',
        //borderWidth: 5,
        //borderColor: "red",
        padding: 15,
    },
    imageContainer: {
        backgroundColor: "white",
        borderWidth: 5,
        borderColor: "teal",
        height: "40%",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    Logoimage: {
        height: "100%",
        width: "100%",
        //borderWidth: 5,
        //borderColor: "teal",
        resizeMode: "contain",
    },
    Logoimage: {
        height: "100%",
        width: "100%",
        //borderWidth: 5,
        //borderColor: "teal",
        resizeMode: "contain",
    },
});

  export default Start;