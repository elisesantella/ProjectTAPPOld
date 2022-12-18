import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

function Amount ({ navigation }) {

  const [number, onChangeNumber] = React.useState(null);

  return (
  //const [text, onChangeText] = React.useState("Useless Text");
  <View style={styles.container}>
    <Header></Header>
    <View style ={styles.mainBody}>
      <View style ={styles.contents2}>
        <View style ={styles.loginSignUpButton}>
          <Text style={styles.text2}>
            <Text>Enter Transaction Amount:</Text>
          </Text>
        </View>
        <View style ={styles.spaceLoginSignUp}>
          <SafeAreaView>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="useless placeholder"
                  keyboardType="numeric"
              />
          </SafeAreaView>
        </View>
        {/* <View style ={styles.spaceLoginSignUp}/> */}
          <View style ={styles.buttonOk}>
          <TouchableOpacity
          onPress={ () => navigation.navigate('Transaction')}>
          <Text style={styles.textConfirm}>OK</Text>
          </TouchableOpacity>
          </View>
      </View>
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
    height: "70%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  contents2: {
    //borderWidth: 5,
    //borderColor: "yellow",
    height: "80%",
    width: '80%',
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOk: {
    backgroundColor: "teal",
    borderWidth: 5,
    borderColor: "darkslategrey",
    height: "15%",
    width: '40%',
    justifyContent: "center",
    alignItems: "center",
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
    color: "black",
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
  },
  spaceLoginSignUp: {
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
    padding: 10,
    borderColor: "teal",
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

  export default Amount;