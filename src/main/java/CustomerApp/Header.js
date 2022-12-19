import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Header() {
    return(
        <View style ={styles.headerContainer}>
            <View style ={styles.ATUContainer}>
                <View style ={styles.ATUimage}>
                    <Image
                        style={styles.ATUimage}
                        source={require('./ATU_Logo.png')} />
                </View>
            </View>
            <View style ={styles.spaceHeader2}/>
            <View style ={styles.TAPPContainer2}>
                <View style ={styles.logoContainer}>
                    <Image
                        style={styles.ATUimage}
                        source={require('./TappLogo.png')} />
                </View>
                <Text style={styles.TAPPtext}>
                    <Text>TAPP</Text>
                </Text>
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
        flexDirection: "row",
        height: "100%",
        width: '40%',
        justifyContent: "flex-start",
        //borderWidth: 5,
        //borderColor: "red",
    },
    ATUimage: {
        height: "100%",
        width: "100%",
        //borderWidth: 5,
        //borderColor: "teal",
    },
    spaceHeader2: {
        flexDirection: "row",
        height: "100%",
        width: '5%',
        justifyContent: "center",
        //borderWidth: 5,
        //borderColor: "black",
    },
    TAPPContainer2: {
        flexDirection: "row",
        height: "100%",
        width: '55%',
        justifyContent: "flex-end",
        padding: 5,
        //borderWidth: 5,
        //borderColor: "yellow",
    },
    logoContainer: {
        flexDirection: "row",
        height: "100%",
        width: '22%',
        justifyContent: "center",
        //borderWidth: 5,
        //borderColor: "black",
    },
    TAPPtext: {
        textAlign: "left",
        fontSize: 60,
        fontWeight: "bold",
        color: "teal",
        padding: 10,
        //borderWidth: 5,
        //borderColor: "red",
    },
  });


  export default Header;