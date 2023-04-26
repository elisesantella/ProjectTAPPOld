import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef} from 'react';
import {Alert, ImageBackground, Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/AmountStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

import QRCode from 'react-native-qrcode-svg';

function Amount ({ navigation, route}) {
  const [price, SetPrice] = React.useState('');
  const [qrvalue, setQrvalue] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  //let myQRCode = useRef();

  // const shareQRCode = () => {
  //   myQRCode.toDataURL((dataURL) => {
  //     console.log(dataURL);
  //     let shareImageBase64 = {
  //       title: 'React Native',
  //       url: `data:image/png;base64,${dataURL}`,
  //       subject: 'Share Link', //  for email
  //     };
  //     Share.share(shareImageBase64).catch((error) => console.log(error));
  //   });
  // };

  const submitData = (price)=>{

    fetch("https://4b60-109-78-148-98.ngrok-free.app/thePrice",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          price: price,
        })
    })
    .then(res=>res.json())
    .then(data=>{
        Alert.alert(`€ ${price} is saved successfully`)
        console.log(data);
        navigation.navigate('Transaction', {paraKey: price}, {paraKey1: qrvalue})
    })
    .catch(err=>{
      Alert.alert("Something went wrong")
      navigation.navigate('Transaction', {paraKey: price}, {paraKey1: qrvalue})
  })
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <ImageBackground
            source={require('./BackgroundImages/backgroundAmount.png')}
            resizeMode= "stretch"
            style={styles.background}>
          <View style ={styles.content}>
            <View style ={styles.amountBox}>
              <Text style={styles.text}>
                <Text>Enter Transaction Amount:</Text>
              </Text>
            </View>
          <View style ={styles.space}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <SafeAreaView>
              <TextInput
                  style={styles.input}
                  onChangeText={SetPrice}
                  value={price}
                  placeholder="Enter Amount"
                  placeholderTextColor="lightsteelblue"
                  keyboardType="numeric"
              />
            </SafeAreaView>
            </TouchableWithoutFeedback>
            {/* <View>
              Returned number: {number}
            </View> */}
          </View>
          <View style ={styles.space}/>
            <View style ={styles.buttonOk}>
              {/* <Text style={styles.textOk}>OK</Text> */}
              <TouchableOpacity
                  onChange={setQrvalue}
                  value={qrvalue}
                  onPress={()  => submitData(price)}>
                <Text style={styles.textOk}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Footer></Footer>
    </View>
  )
}
  
export default Amount;
