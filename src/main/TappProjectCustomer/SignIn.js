import React from 'react';
import { useState } from 'react'
import {Alert, ImageBackground, Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import styles from './StyleSheets/SignUpStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

const URL = `https://84e2-109-78-225-88.ngrok-free.app`

let transactionData = "";
let balanceData = "";
let usernameData = "";
let id = "";
let data = "";

function SignIn({ navigation }) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [text, setText] = useState('. . . waiting for fetch API');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const submitData = async () => {
    try {
      const res = await fetch(URL + `/signinC?` + new URLSearchParams({
        username: username,
        password: password
      }),
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          body:JSON.stringify({
          username, password
          }),
        }
      );
      if (res.ok) {
        data = await res.json();
        balanceData = data.balance;
        transactionData = data.transactions;
        usernameData = data.username
        id = data._id;
        console.log(data)
        setText(JSON.stringify(data))
        console.log(balanceData)
        console.log(transactionData)
        console.log(usernameData)
        console.log(id)
        setText(JSON.stringify(data))
        navigation.navigate('Home', {id: id, data: data, usernameData: usernameData, 
          transactionData: transactionData, balanceData:balanceData});
        } else {
          console.log(data)
          Alert.alert(`Sign In Unsuccessful`)
        }
      } catch (err) {
        console.log(err);
      }
    };
   

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
              <Text style={styles.text2}>Enter Username</Text>
            </View>
              <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Enter Username"
                    placeholderTextColor="lightsteelblue"
                    keyboardType="default"
                />
              </SafeAreaView>
            <View style ={styles.loginSignUpButton}>
            <Text style={styles.text2}>Enter Password</Text>
            </View>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Enter Password"
                    placeholderTextColor="lightsteelblue"
                    keyboardType="default"
                    secureTextEntry={true}
                />
              </SafeAreaView>
              </TouchableWithoutFeedback>
              <View style ={styles.buttonConfirm}>
              <TouchableOpacity
              onPress={async ()  => submitData()}>
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

export default SignIn;