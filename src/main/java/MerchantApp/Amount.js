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
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
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
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter Amount"
                placeholderTextColor="lightsteelblue"
                keyboardType="default"
            />
          </SafeAreaView>
        </View> 
        <View style ={styles.space}/>
          <View style ={styles.buttonOk}>
            <TouchableOpacity
              onPress={ () => navigation.navigate('Transaction')}>
              <Text style={styles.textOk}>OK</Text>
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
    height: "75%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "teal",
    borderTopWidth: 0,
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
    shadowColor: 
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