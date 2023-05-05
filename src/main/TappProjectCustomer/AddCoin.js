import React, { startTransition } from 'react';
import { useState } from 'react'
import { Alert, ImageBackground, TouchableOpacity, SafeAreaView, TextInput, Text, View } from 'react-native';
import styles from './StyleSheets/AddCoinStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

const URL = `https://84e2-109-78-225-88.ngrok-free.app`

let transactionData = "";
let data = "";

function AddCoin({ navigation, route }){

  const { usernameData, balanceData, transactionData} = route.params;
  const [number, setNumber] = React.useState('');
 // const [balance, setBalance] = React.useState('');
  const [text, setText] = useState('. . . waiting for fetch API');

  const submitData = async () => {
    try {
      const res = await fetch(
        URL + `/topup/` + usernameData,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          body: JSON.stringify({
            number: number, //balance: balanceData
          }) // Need to use POST to send body
        }
      )
      const data = await res.json()
      console.log(data)
      setText(JSON.stringify(data))
      if (data.success) {
        const newBalance = Number(balanceData) + Number(number);
        navigation.navigate('Home', {usernameData: usernameData, transactionData: transactionData, balanceData: newBalance.toString()})
      }
    } catch (err) {
      console.log(err)
    }
  }


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
              <Text style={styles.text}>Enter Coin Amount: </Text>
            </View>
            <View style={styles.space}></View>
              <SafeAreaView>
              <TextInput
                  style={styles.input}
                  onChangeText={setNumber}
                  value={number}
                  placeholder="Enter Amount"
                  placeholderTextColor="lightsteelblue"
                  keyboardType="numeric"
              />
              </SafeAreaView>
            <View style={styles.space}></View>
            <View style={styles.confirmButton}>
              <TouchableOpacity
              onPress={async ()  => submitData()}>
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