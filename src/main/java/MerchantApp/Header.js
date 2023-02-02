import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Header() {
    return(
        <View style ={styles.headerContainer}>
            <View style ={styles.ATUContainer}>
            <View style ={styles.ATUSpace}/>
                <View style ={styles.ATU2}>
                    <Image 
                        style={styles.ATUimage}
                        source={require('./ATU_Logo.png')} />
                </View>
            </View>
            <View style ={styles.spaceHeader2}/>
            <View style ={styles.TAPPContainer2}>
                <View style ={styles.logoContainer}>
                <View style ={styles.logoSpace}/>
                <View style ={styles.logo2}>
                    <Image 
                        style={styles.logoImage}
                        source={require('./TappLogo2.png')} />
                </View>
                </View>
                <View style ={styles.TAPPtext}>
                <Text style={styles.text}>
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
    ATU2: {
        height: "190%",
        width: '100%',
        justifyContent: "flex-end",
        //borderWidth: 5,
        //borderColor: "blue",
    },
    //  logoImage: {
    //     alignSelf: "center",
    //     height: "90%",
    //     width: "100%",
    // },
    ATUimage: {
        alignSelf: "center",
        height: "100%",
        width: "100%",
    },
    spaceHeader2: {
        flexDirection: "row",
        height: "100%",
        width: '5%',
        justifyContent: "center",
       // borderWidth: 5,
        //borderColor: "black",
    },
    TAPPContainer2: {
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
    logo2: {
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
    TAPPtext: {
        flexDirection: "column-reverse",
        //borderWidth: 5,
        //borderColor: "red",
    },
    text: {
        textAlign: "center",
        fontSize: 60,
        fontWeight: "bold",
        color: "teal",
    },
  });
  

  export default Header;