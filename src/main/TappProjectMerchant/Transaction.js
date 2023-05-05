import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef} from 'react';
import {Alert,ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/TransactionStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';
import QRCode from 'react-native-qrcode-svg';

const URL = `https://84e2-109-78-225-88.ngrok-free.app`


function Transaction({ navigation, route }) {
  const { data, companyNameData, transactionData, balanceData } = route.params;
  const price = route.params?.price
  let myQRCode = useRef();
  const [text, setText] = useState('. . . waiting for fetch API');
  console.log(price)
  console.log(companyNameData)

  const submitData = async () => {
    try {
      const res = await fetch(
        URL + `/addtransactionM/` + companyNameData,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          body: JSON.stringify({
            price: price, 
          }) // Need to use POST to send body
        }
      )
      const data = await res.json()
      console.log(data)
      setText(JSON.stringify(data))
      if (data.success) {
        const newBalance = Number(balanceData) + Number(price);
        navigation.navigate('Home', {data: data, companyNameData: companyNameData, 
          transactionData: transactionData, balanceData: newBalance.toString()})
        Alert.alert(`Transaction Successful: ${price}TAPP`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <ImageBackground
            source={require('./BackgroundImages/backgroundTransaction.png')}
            resizeMode= "stretch"
            style={styles.background}>
          <View style ={styles.content}>
            <View style ={styles.qrContainer}>
              <QRCode
                  //QR code value
                  value={price ? price.toString() : 'NA'}
                  //size of QR Code
                  size={250}
                  //Color of the QR Code 
                  color="midnightblue"
                  //Background Color of the QR Code 
                  backgroundColor="white"
                  //Center Logo size  
                  // logoSize={30}
                  // //Center Logo margin 
                  // logoMargin={2}
                  // //Center Logo radius 
                  // logoBorderRadius={15}
                  // //Center Logo background 
                  // logoBackgroundColor="yellow"
                  getRef={myQRCode}
                />
                {/* <QRCodeScanner
                  onRead={(e) => {
                    // Extract necessary data from the scanned QR code
                    const extractedData = e.data;
                    navigation.navigate('Approved', { extractedData });
                  }} */}
            </View>
            <View style ={styles.space1}/>
            <View style ={styles.amountBox}>
              <Text style={styles.text}>
                <Text>Amount: {price} TAPP</Text>
              </Text>
            </View>
            <View style ={styles.space2}></View>
            <View style ={styles.buttonBox}> 
                <TouchableOpacity
                  onPress={async ()  => submitData()}>
                  <Text style={styles.textConfirm}>OK</Text>
                </TouchableOpacity>
              </View>
              {/* <View style ={styles.companyEntry}>
                <Text style={styles.text}>
                   {route.params.paraKey}
                </Text>
              </View> */}
          </View>
        </ImageBackground>
      </View>
      <Footer></Footer>
    </View>
  );
}

export default Transaction;
