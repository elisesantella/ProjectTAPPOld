import React, { useState, useEffect, useRef} from 'react';
import {Alert,ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './StyleSheets/TransactionStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';
import QRCode from 'react-native-qrcode-svg';
import { Ionicons } from '@expo/vector-icons'; //return Arrow

const URL = `https://723e-51-37-102-201.ngrok-free.app`

// let transactionData = "";
// let balanceData = "";
// let companyName = "";
let data = "";

function Transaction({ navigation, route }) {
  const { companyNameData, balanceData, transactionData } = route.params;
  const price = route.params?.price
  let myQRCode = useRef();
  // const [text, setText] = useState('. . . waiting for fetch API');
  console.log(price)
  console.log(companyNameData)
  console.log(transactionData)
  console.log(balanceData)

  //Add new transaction to data containing price 
  const submitData = async () => {
    try {
      const res = await fetch(
        URL + `/addtransactionM/` + companyNameData,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" 
          },
          body: JSON.stringify({
            price: price, 
          }) 
        }
      )
     // const data = await res.json()
      //console.log(data)
      // setText(JSON.stringify(data))
      //if (data.success) {
      if (res.ok) {
        data = await res.json();
       // balanceData = data.balance;
        const transactionData = data.transactions
        //companyNameData = data.companyName
        console.log(data)
        //console.log(balanceData)
        console.log(transactionData)
        console.log(companyNameData)
        //submitData1()
        //console.log(data)
        const newBalance = Number(balanceData) + Number(price);
        console.log(newBalance)
       // const transactionData1 = data.transactions
        //console.log(transactionData1)
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
            </View>
            <View style ={styles.space1}/>
            <View style ={styles.amountBox}>
              <Text style={styles.text}>
                <Text>Amount: {price} TAPP</Text>
              </Text>
            </View>
            <View style ={styles.space2}></View>
            <View style ={styles.buttonContainer}>
              <View style ={styles.buttonBox}> 
                <TouchableOpacity
                  onPress={() => navigation.navigate('Amount', {data: data, companyNameData: companyNameData, transactionData: transactionData, balanceData: balanceData})}>
                  <Ionicons name="return-up-back-sharp" size={45} color="midnightblue" />
                </TouchableOpacity>
              </View>
              <View style ={styles.space3}></View>
              <View style ={styles.buttonBox}> 
                <TouchableOpacity
                  onPress={async ()  => submitData()}>
                  <Text style={styles.textConfirm}>OK</Text>
                </TouchableOpacity>
              </View>
            </View> 
          </View>
        </ImageBackground>
      </View>
      <Footer></Footer>
    </View>
  );
}

export default Transaction;
