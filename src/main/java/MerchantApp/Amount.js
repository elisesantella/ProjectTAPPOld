import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef} from 'react';
import {Alert, ImageBackground, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

import QRCode from 'react-native-qrcode-svg';

function Amount ({ navigation, route}) {
  const [number, onSetNumber] = React.useState('');
  const [qrvalue, setQrvalue] = useState('');
  let myQRCode = useRef();

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

  // useEffect(() => {
  //   // POST request using fetch inside useEffect React hook
  //   const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ amount: number, })
  //   };
  //   fetch('http://localhost:3000/sms', requestOptions)
  //       .then(response => response.json())
  //       .then(data => onChangeNumber(data.number));

  // }, []);

  //hello elise

  const submitData = (number)=>{
    fetch("https://crazy-berries-vanish-51-37-107-118.loca.lt",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          numberVariable: number,
        })
    })
    .then(res=>res.json())
    .then(data=>{
        Alert.alert(`${data.number} is saved successfully`)
        console.log(JSON.stringify(data));
        navigation.navigate('Transaction', {paraKey: number}, {paraKey1: qrvalue})
    })
    .catch(err=>{
      Alert.alert("someting went wrong")

      navigation.navigate('Transaction', {paraKey: number})
  })
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <ImageBackground
            source={require('./backgroundAmount.png')}
            resizeMode= "stretch"
            style={styles.background}>
          <View style ={styles.content}>
            <View style ={styles.amountBox}>
              <Text style={styles.text}>
                <Text>Enter Transaction Amount:</Text>
              </Text>
            </View>
          <View style ={styles.space}>
            <SafeAreaView>
              <TextInput
                  style={styles.input}
                  onChangeText={onSetNumber}
                  value={number}
                  placeholder="Enter Amount"
                  placeholderTextColor="lightsteelblue"
                  keyboardType="default"
              />
            </SafeAreaView>
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
                  onPress={()  => submitData(number)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  mainBody: {
    flexDirection: "column",
    backgroundColor: "powderblue",
    height: "75%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "teal",
    borderTopWidth: 0,
  },
  background: {
    flexDirection: "column",
    height: "100%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    //borderWidth: 5,
    //borderColor: "yellow",
    height: "80%",
    width: '80%',
    justifyContent: "center",
    alignItems: "center",
  },
  amountBox: {
    backgroundColor: "cadetblue",
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
    width: '100%',
    borderWidth: 5,
    borderColor: "teal",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "midnightblue",
    //borderWidth: 5,
    //borderColor: "yellow",
  },
  space: {
    height: "15%",
    width: '100%',
    //borderWidth: 5,
    //borderColor: "red",
    padding: 15,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    borderColor: "teal",
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "midnightblue",
  },
  buttonOk: {
    backgroundColor: "teal",
    borderWidth: 5,
    borderColor: "darkslategrey",
    height: "15%",
    width: '40%',
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "midnightblue",
    shadowOpacity: 0.5,
    shadowRadius: 15 ,
    shadowOffset : { width: 7, height: 7},
  },
  textOk: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    //borderWidth: 5,
    //borderColor: "yellow",
  },
});

export default Amount;
