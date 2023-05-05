import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/ApprovedStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';


function Approved({ navigation, route }) {
  const paraKey = route.params?.paraKey
  return(
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <ImageBackground 
            source={require('./BackgroundImages/backgroundApproved.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
          <View style ={styles.content}>
            <View style ={styles.titleBox}>
              <Text style={styles.text}>
                <Text>Transaction Approved</Text>
              </Text>
            </View>
            <View style ={styles.space1}/>
            <View style ={styles.titleBox2}>
              <Text style={styles.text}>
              <Text>Amount:  €{paraKey}</Text>
              </Text>
            </View>
            {/* <View style ={styles.space2}>
              <View style ={styles.companyEntry}/>
            </View>  */}
            <View style ={styles.space2}/>
            <View style ={styles.buttonReturn}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textReturn}>Return to Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Footer></Footer>
    </View>
  );
}

export default Approved;
