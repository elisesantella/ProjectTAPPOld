import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Footer() {
    return(
        <View style ={styles.footer}>
        <View style ={styles.footerContent}>
          <Text style={styles.versionText}>
            <Text>Customer Version</Text>
          </Text>
        </View>
        <View style ={styles.spaceFooter}/>
      </View>
    );
  }

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        backgroundColor: "teal",
        height: "8%",
        width: '100%',
        //borderWidth: 3,
        //borderColor: "yellow",
      },
      footerContent:{
        flexDirection: "column-reverse",
        height: "100%",
        width: '50%',
        justifyContent: "flex-start",
        //borderWidth: 5,
        //borderColor: "red",
        padding: 15,
      },
      spaceFooter: {
        flexDirection: "row",
        height: "100%",
        width: '50%',
        justifyContent: "flex-end",
        //borderWidth: 5,
        //borderColor: "black",
      },
      versionText: {
        textAlign: "left",
        fontSize: 17,
        fontWeight: "bold",
        color: "aliceblue",
        //borderWidth: 2,
        //borderColor: "blue",
      },
  });
  

  export default Footer;