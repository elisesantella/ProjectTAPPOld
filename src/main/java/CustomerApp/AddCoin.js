import { StatusBar } from 'expo-status-bar';
import React, { startTransition } from 'react';
import { ImageBackground, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, SafeAreaView, TextInput, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/AddCoinStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

function AddCoin({ navigation, route }){

  const [number, onChangeNumber] = React.useState('');


  return(
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.bodyContainer}>
        <ImageBackground 
            source={require('./BackgroundImages/backgroundAmount.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
          <View style={styles.contentContainer}>
            <View style ={styles.amountBox}>
              <Text style={styles.text}>Enter Coin Amount:</Text>
            </View>
            <View style={styles.space}></View>
              <SafeAreaView>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Enter Amount"
                  placeholderTextColor="lightsteelblue"
                  keyboardType="default"
              />
              </SafeAreaView>
            <View style={styles.space}></View>
            <View style={styles.confirmButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Home', {paraKey: number})}>
              <Text style={styles.confirmText}>Approve</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Footer></Footer>
    </View>
  );
}

export default AddCoin;