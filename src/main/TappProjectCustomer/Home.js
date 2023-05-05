import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ImageBackground, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/HomeStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

function Home({ navigation, route }){
  
  // const { usernameId, balance } = route.params;
  const [date, setDate] = useState(new Date());
  // const [item, setItem] = useState([])
  // const [totalPrice, setTotalPrice] = useState(0);
  const {data, usernameData , transactionData, balanceData } = route.params; //PRETTY SURE CAN ACCESS BALANCE & TRANSACTIONS USING DATA.BALANCE/DATA.TRANSACTIONS

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60 * 60 * 24); // update every 24 hours
    return () => clearInterval(timer);
  }, []);

  const url = "https://7cf4-109-78-62-166.ngrok-free.app"
  //console.log(data)
  console.log(transactionData)

    return(
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.bodyContainer}>
        <ImageBackground 
            source={require('./BackgroundImages/backgroundHome.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
          <View style={styles.contentContainer}>
            <View style={styles.dateContainer}>
            <View style={styles.logoutButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Start')}>
                <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateSpace}></View>
              <View style={styles.dateTextContainer}>
               <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
              </View>
            </View>
            <View style ={styles.space2}/>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.dateText}>Balance: </Text>
            </View>
            <View style ={styles.space2}/>
            <View style ={styles.balanceSpace}> 
             <Text style={styles.text5}>
                <Text>{balanceData} TAPP </Text>
              </Text>
            </View>
            <View style={styles.spaceHome}>
              
            </View>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.loginSignUpText}>Recent Transactions:</Text>
            </View>
            <View style={styles.transactionSpace}>
            {transactionData.length > 0 ? (
                transactionData.slice(Math.max(transactionData.length - 5, 0)).map((transaction, index) => (
                  <View key={index}>
                    <Text style={styles.text6}> {transaction.date}  </Text>
                    <Text style={styles.text6}> {transaction.price} TAPP </Text>
                  </View>
              ))
              ) : ( 
                <Text> No transactions </Text>
              )}
            {/* {transactionData && transactionData.transactions.map((transaction, index) => (
                <View key={index} style={styles.button2}>
                  <Text style={styles.text5}>
                    {transaction.date} {"\n"}
                    Item Price: €{transaction.price}
                  </Text>
                </View>
              ))} */}
                {/* {item.length > 0? item.map((transactions) => {
                      return (
                        <View> */}
                        {/* // <View style={styles.button2}>  */}
                          {/* <Text style={styles.text5}> {transactions.date} {"\n"} Item ID: {transactions.itemId} €{transactions.price} </Text> */}
                          {/* <Text style={styles.text1}>ID: {products.ourId}</Text> */}
                        {/* </View>
                      );
                    }) : null} */}
            </View>
            <View style={styles.dateContainer}>
              <View style={styles.paymentButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Transaction', {data: data, usernameData: usernameData, transactionData: transactionData, balanceData: balanceData})}>
              <Text style={styles.homeText}>Payment</Text>
              </TouchableOpacity>
              </View> 
              <View style={styles.paymentSpace}></View>
              <View style={styles.paymentButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Add Coin', {usernameData: usernameData, balanceData: balanceData, transactionData: transactionData})}>
              <Text style={styles.homeText}>Add Coin</Text>
              </TouchableOpacity>
              </View> 
            </View>
          </View>
          </ImageBackground>
        </View>
        <Footer></Footer>
      </View>
    );
  }

export default Home;