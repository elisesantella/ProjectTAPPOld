import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Header() {
    return(
        <View style ={styles.headerContainer}>
            <View style ={styles.ATUContainer}>
                <View style ={styles.ATUSpace}/>
                <View style ={styles.ATUImageContainer}>
                    <Image 
                        style={styles.ATUimage}
                        source={require('./ATU_Logo.png')} />
                </View>
            </View>
            <View style ={styles.spaceHeader}/>
            <View style ={styles.TAPPContainer}>
                <View style ={styles.logoContainer}>
                    <View style ={styles.logoSpace}/>
                        <View style ={styles.logoImageContainer}>
                            <Image 
                                style={styles.logoImage}
                                source={require('./TappLogo2.png')} />
                        </View>
                </View>
                <View style ={styles.TAPPTextContainer}>
                    <Text style={styles.TAPPtext}>
                        <Text>TAPP</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        backgroundColor: "aliceblue",
        height: "15%",
        width: '100%',
        borderWidth: 5,
        borderColor: "teal",
    },
    ATUContainer: {
        flexDirection: "column",
        height: "100%",
        width: '40%',
        justifyContent: "center",
        //borderWidth: 5,
        //borderColor: "red",
    },
    ATUSpace: {
        height: "30%",
        width: '100%',
        justifyContent: "flex-start",
        //borderWidth: 5,
        //borderColor: "blue",
    },
    ATUImageContainer: {
        height: "190%",
        width: '100%',
        justifyContent: "flex-end",
        //borderWidth: 5,
        //borderColor: "blue",
    },
    ATUimage: {
        alignSelf: "center",
        height: "100%",
        width: "100%",
    },
    spaceHeader: {
        flexDirection: "row",
        height: "100%",
        width: '5%',
        justifyContent: "center",
       // borderWidth: 5,
        //borderColor: "black",
    },
    TAPPContainer: {
        flexDirection: "row",
        height: "100%",
        width: '55%',
        justifyContent: "flex-end",
        alignSelf: "space-between",
        //borderWidth: 5,
        //borderColor: "yellow",
    },
    logoContainer: {
        flexDirection: "column",
        height: "100%",
        width: '30%',
        padding: 5,
        //borderWidth: 5,
        //borderColor: "green",
    },
    logoSpace: {
        height: "27%",
        width: '100%',
        justifyContent: "flex-start",
        //borderWidth: 5,
        //borderColor: "blue",
    },
    logoImageContainer: {
        height: "70%",
        width: '100%',
        justifyContent: "flex-end",
        //borderWidth: 5,
        //borderColor: "blue",
    },
     logoImage: {
        alignSelf: "center",
        height: "80%",
        width: "89%",
    },
    TAPPTextContainer: {
        flexDirection: "column-reverse",
        //borderWidth: 5,
        //borderColor: "red",
    },
    TAPPtext: {
        textAlign: "center",
        fontSize: 60,
        fontWeight: "bold",
        color: "midnightblue",
        textShadowColor: "teal",
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 5,
    },
  });
  

  export default Header;