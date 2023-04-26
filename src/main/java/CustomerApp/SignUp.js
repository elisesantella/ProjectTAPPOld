import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/SignUpStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

function SignUp({ navigation }) {

  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

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
              <Text style={styles.text2}>Enter a Username</Text>
            </View>
              <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUsername}
                    value={username}
                    placeholder="Enter Username"
                    placeholderTextColor="lightsteelblue"
                    keyboardType="default"
                />
              </SafeAreaView>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.text2}>Enter a Password</Text>
            </View>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Enter Password"
                    placeholderTextColor="lightsteelblue"
                    keyboardType="default"
                    secureTextEntry={true}
                />
              </SafeAreaView>
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
  