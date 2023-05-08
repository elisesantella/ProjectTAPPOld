import React, { useState, useEffect, useRef} from 'react';
import {Alert, ImageBackground, Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback,View} from 'react-native';
import styles from './StyleSheets/AmountStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';
//import QRCode from 'react-native-qrcode-svg';
import { FontAwesome5 } from '@expo/vector-icons'; //House Vector

const URL = `https://723e-51-37-102-201.ngrok-free.app`


//let data = "";

function Amount ({ navigation, route}) {
  const [price, SetPrice] = React.useState('');
  //const [qrvalue, setQrvalue] = useState('');
  const [text, setText] = useState('. . . waiting for fetch API');
  const {data, companyNameData , transactionData, balanceData } = route.params;
  console.log(companyNameData)
  console.log(transactionData)

  //Dismiss Numeric Keyboard
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  //Sending price to server for testing
  const submitData = async () => {
    try {
      const res = await fetch(
        URL + `/addprice`,
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" 
          },
          body:JSON.stringify({
            price: price
          })
        }
      )
      const data1 = await res.json();
      console.log(data1)
      setText(JSON.stringify(data1))
      //Alert.alert(`${price} is saved successfully`)
      navigation.navigate('Transaction', {price: price, data: data, companyNameData: companyNameData, transactionData: transactionData, balanceData: balanceData})
    } catch (err) {
      console.log(err)
      Alert.alert("Something went wrong")
    }
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
            <View style ={styles.homeContainer}>
              <View style={styles.returnButton}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home', {data: data, companyNameData: companyNameData, transactionData: transactionData, balanceData: balanceData})}>
                  <FontAwesome5 name="home" size={50} color="midnightblue" />
                </TouchableOpacity>
              </View>
            </View>
            <View style ={styles.smallSpace}/>
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
          </View>
          <View style ={styles.space}/>
            <View style ={styles.buttonOk}>
              <TouchableOpacity
                onPress={async ()  => submitData()}>
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
