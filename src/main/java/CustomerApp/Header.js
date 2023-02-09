import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Header() {
    return(
        <View style ={styles.headerContainer}>
            <View style ={styles.atuContainer}>
                <View style ={styles.atuSpace}/>
                <View style ={styles.atuImageContainer}>
                    <Image 
                        style={styles.atuImage}
                        source={require('./ATU_Logo.png')} />
                </View>
            </View>
            <View style ={styles.spaceHeader}/>
            <View style ={styles.tappContainer}>
                <View style ={styles.logoContainer}>
                    <View style ={styles.logoSpace}/>
                        <View style ={styles.logoImageContainer}>
                            <Image 
                                style={styles.logoImage}
                                source={require('./TappLogo2.png')} />
                        </View>
                </View>
                <View style ={styles.tappTextContainer}>
                    <Text style={styles.tappText}>
                        <Text>TAPP</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 3,
        flexDirection: "row",
        backgroundColor: "aliceblue",
        //height: "15%",
        //width: '100%',
        borderWidth: 5,
        borderColor: "teal",
    },
    atuContainer: {
        flexDirection: "column",
        height: "100%",
        width: '40%',
        justifyContent: "center",
        //borderWidth: 5,
        //borderColor: "red",
    },
    atuSpace: {
        height: "30%",
        width: '100%',
        justifyContent: "flex-start",
        //borderWidth: 5,
        //borderColor: "blue",
    },
    atuImageContainer: {
        height: "190%",
        width: '100%',
        justifyContent: "flex-end",
        //borderWidth: 5,
        //borderColor: "blue",
    },
    atuImage: {
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
    tappContainer: {
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
    tappTextContainer: {
        flexDirection: "column-reverse",
        //borderWidth: 5,
        //borderColor: "red",
    },
    tappText: {
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