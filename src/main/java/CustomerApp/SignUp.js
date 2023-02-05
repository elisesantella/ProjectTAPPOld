import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function SignUp({ navigation }) {

  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

    return(
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <View style ={styles.contents2}>
          <View style ={styles.loginSignUpButton}>
            <Text style={styles.text2}>
              <Text>Enter a Username</Text>
            </Text>
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
          <Text style={styles.text2}>
              <Text>Enter a Password</Text>
            </Text>
          </View>
          <SafeAreaView>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangePassword}
                  value={password}
                  placeholder="Enter Password"
                  placeholderTextColor="lightsteelblue"
                  keyboardType="default"
                  secureTextEntry="true"
              />
            </SafeAreaView>
            <View style ={styles.buttonConfirm}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Start')}>
            <Text style={styles.textConfirm}>Confirm</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
      <Footer></Footer>
    </View>
  );
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
      height: "70%",
      width: '100%',
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 5,
      borderColor: "teal",
      borderTopWidth: 0,
    },
    contents2: {
      //borderWidth: 5,
      //borderColor: "yellow",
      height: "80%",
      width: '80%',
      justifyContent: "center",
      alignItems: "center",
    },
    buttonConfirm: {
      backgroundColor: "teal",
      borderWidth: 5,
      borderColor: "darkslategrey",
      height: "20%",
      width: '50%',
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    textConfirm: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
      //borderWidth: 5,
      //borderColor: "yellow",
    },
    text2: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "midnightblue",
      //borderWidth: 5,
      //borderColor: "yellow",
    },
    loginSignUpButton: {
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
    spaceLoginSignUp: {
      height: "15%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "red",
      padding: 15,
    },
    companyEntry: {
      backgroundColor: "white",
      height: "15%",
      width: '100%',
      borderWidth: 3,
      borderColor: "teal",
      padding: 15,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    pinEntry: {
      backgroundColor: "white",
      height: "15%",
      width: '100%',
      borderWidth: 3,
      borderColor: "teal",
      padding: 15,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    input: {
      height: 50,
      width: 200,
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
  });

  export default SignUp;
  