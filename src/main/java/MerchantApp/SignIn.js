import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, ImageBackground, Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/SignUpStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

function SignIn({ navigation }) {

  const [companyName, onChangeCompany] = React.useState(null);
  const [pin, onChangePin] = React.useState('');

  // const onChangePin = (text) => {
  //   setPin(text);
  // };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const submitData = (companyName, pin)=>{

    fetch("https://4b60-109-78-148-98.ngrok-free.app/signin",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          companyName: companyName, pin: pin
        })
    })
    .then(res=>res.json())
    .then(data=>{
        Alert.alert(`Company is Logged successfully`)
        console.log(data);
        navigation.navigate('Home')
    })
    .catch(err=>{
      Alert.alert("Something went wrong")
      navigation.navigate('Start')
  })
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
                    onChangeText={onChangeCompany}
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
                    onChangeText={onChangePin}
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
              onPress={()  => submitData(companyName, pin)}>
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