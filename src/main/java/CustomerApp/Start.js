import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/StartStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

function Start({ navigation }) {
    return(
        <View style={styles.container}>
            <Header></Header>
            <View style ={styles.mainBody}>
                <ImageBackground 
                        source={require('./BackgroundImages/background.png')} 
                        resizeMode= "stretch" 
                        style={styles.background}>
                    <View style ={styles.content}>
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
                            <Image
                                style={styles.logoImage}
                                source={require('./Logos/TappLogo.png')} />
                        </View>
                    </View>
                </ImageBackground>
             </View>
            <Footer></Footer>
        </View>
    );
}

export default Start;
