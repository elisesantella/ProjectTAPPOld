import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/HomeStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';


function Home({ navigation, route }) {
  const [date, setDate] = useState(new Date());
  // const [item, setItem] = useState([])
  // const [totalPrice, setTotalPrice] = useState(0);
  //const [loading, setLoading] = useState(true);
  // const [balance, setBalance] = useState([]);
  const {data, companyNameData , transactionData, balanceData} = route.params; //PRETTY SURE CAN ACCESS BALANCE & TRANSACTIONS USING DATA.BALANCE/DATA.TRANSACTIONS
  //const [transactionData, setTransactionData] = useState(route.params.transactionData);

  // useEffect(() => {
  //   setTransactionData(route.params.transactionData);
  // }, [route.params.transactionData]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60 * 60 * 24); // update every 24 hours
    return () => clearInterval(timer);
  }, []);

  const url = "https://84e2-109-78-225-88.ngrok-free.app"

  console.log(transactionData)

  return(
    <View style={styles.container}>
      <Header></Header>
      <View style ={styles.mainBody}>
        <ImageBackground 
            source={require('./BackgroundImages/backgroundHome.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
          <View style ={styles.content}>
            <View style ={styles.dateContainer}>
              <View style={styles.logoutButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Start')}>
                <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
              </View>
              <View style ={styles.spaceDate}/>
              <View style ={styles.date}>
                <Text style={styles.text}>
                  <Text>{date.toLocaleDateString()}</Text>
                </Text>
              </View>
            </View>
            <View style ={styles.space2}/>
            <View style ={styles.balanceBox}>
              <Text style={styles.text}>
                <Text>Balance:</Text>
              </Text>
            </View>
            <View style ={styles.space2}/>
            <View style ={styles.balanceSpace}> 
             <Text style={styles.text5}>
                <Text>{balanceData} TAPP </Text>
              </Text>
            </View>
            <View style={styles.spaceHome}>
              
            </View>
            <View style ={styles.recentTransBox}>
              <Text style={styles.text}> Recent Transactions: </Text>
                {/* <Text>Recent Transactions: </Text> */}
             {/* </Text> */}
            </View>
            <View style ={styles.space}/>
            <View style ={styles.transactionEntry}>
            {transactionData.length > 0 ? (
                transactionData.slice(Math.max(transactionData.length - 5, 0)).map((transaction, index) => (
                  <View key={index}>
                    <Text style={styles.text6}> {transaction.date} </Text>
                    <Text style={styles.text6}> {transaction.price} TAPP </Text>
                  </View>
              ))
              ) : ( 
                <Text> No transactions </Text>
              )}
              </View>
            <View style ={styles.space}/>
            <View style ={styles.makeSaleButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Amount', {data: data, companyNameData: companyNameData, transactionData: transactionData, balanceData: balanceData})}>
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

export default Home;