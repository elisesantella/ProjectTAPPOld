import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/SignUpStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

function SignUp({ navigation }) {

  const [company, onChangeCompany] = React.useState(null);
  const [pin, onChangePin] = React.useState('');

  // const onChangePin = (text) => {
  //   setPin(text);
  // };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
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
              <Text style={styles.text2}>Enter Company Name</Text>
            </View>
              <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeCompany}
                    value={company}
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
              onPress={() => navigation.navigate('Start')}>
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