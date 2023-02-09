import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';


function Home({ navigation }) {
  return(
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <ImageBackground 
            source={require('./backgroundHome.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
          <View style ={styles.content}>
            <View style ={styles.dateContainer}>
              <View style ={styles.spaceDate}/>
              <View style ={styles.date}>
                <Text style={styles.text}>
                  <Text>DATE:</Text>
                </Text>
              </View>
            </View>
            <View style ={styles.space}/>
            <View style ={styles.recentTransBox}>
              <Text style={styles.text}>
                <Text>Recent Transactions:</Text>
              </Text>
            </View>
            <View style ={styles.space}/>
            <View style ={styles.transactionEntry}/>
            <View style ={styles.space}/>
            <View style ={styles.makeSaleButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Amount')}>
              <Text style={styles.text}>Make Sale</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
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
  dateContainer: {
    flexDirection: "row",
    height: "10%",
    width: '100%',
    //borderWidth: 5,
    //borderColor: "black",
  },
  spaceDate: {
    flexDirection: "row",
    height: "100%",
    width: '60%',
    justifyContent: "flex-start",
    //borderWidth: 5,
    //borderColor: "blue",
  },
  date: {
    backgroundColor: "aliceblue",
    flexDirection: "row",
    height: "100%",
    width: '40%',
    borderWidth: 2,
    borderColor: "teal",
    justifyContent: "center",
    alignItems: "center",
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
    height: "5%",
    width: '100%',
    //borderWidth: 5,
    //borderColor: "red",
    padding: 5,
  },
  recentTransBox: {
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
  transactionEntry: {
    backgroundColor: "white",
    height: "45%",
    width: '90%',
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
  },
  makeSaleButton: {
    backgroundColor: "cadetblue",
    borderWidth: 5,
    borderColor: "teal",
    height: "15%",
    width: '50%',
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
});
  
export default Home;