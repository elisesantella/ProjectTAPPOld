import React from 'react';
import { useState } from 'react'
import {Alert, ImageBackground, Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import styles from './StyleSheets/SignUpStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

const URL = `https://84e2-109-78-225-88.ngrok-free.app`

let transactionData = "";
let data = "";
let id = "";

function SignUp({ navigation }) {

  const [companyName, setCompany] = React.useState('');
  const [pin, setPin] = React.useState('');
  const [text, setText] = useState('. . . waiting for fetch API');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const submitData = async () => {
    try {
      const res = await fetch(
        URL + `/signupM`,
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          body:JSON.stringify({
          companyName: companyName, pin: pin, transactions: {}
          })
        }
      )
      data = await res.json();
      transactionData = data.transactions;
      //id = data.id;
      console.log(data)
      //console.log(id) THERE IS NO ID VALUE IN DATBASE IT COMES BACK AS UNDEFINED
      console.log(transactionData)
      setText(JSON.stringify(data))
      Alert.alert(`Account is saved successfully`)
      navigation.navigate('Start')
    } catch (err) {
      console.log(err)
      Alert.alert(`Sign Up Unsuccessful`)
    }
  }
   

  return(
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <ImageBackground 
            source={require('./BackgroundImages/backgroundSignUp.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
          <View style ={styles.contents2}>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.text2}>Enter Company Name</Text>
            </View>
              <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={setCompany}
                    value={companyName}
                    placeholder="Enter Company"
                    placeholderTextColor="lightsteelblue"
                    keyboardType="default"
                />
              </SafeAreaView>
            <View style ={styles.loginSignUpButton}>
            <Text style={styles.text2}>Enter a PIN</Text>
            </View>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={setPin}
                    value={pin}
                    placeholder="Enter PIN"
                    placeholderTextColor="lightsteelblue"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />
              </SafeAreaView>
              </TouchableWithoutFeedback>
              <View style ={styles.buttonConfirm}>
              <TouchableOpacity
              onPress={ async ()  => submitData()}>
              <Text style={styles.textConfirm}>Confirm</Text>
              </TouchableOpacity>
              </View>
          </View>
        </ImageBackground>
      </View>
      <Footer></Footer>
    </View>
  );
}

export default SignUp;