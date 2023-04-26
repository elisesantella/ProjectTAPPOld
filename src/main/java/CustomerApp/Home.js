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
  
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);

  let theText = null
  if (route) {
    if (route.params) {
      if (route.params.paraKey) {
        theText = route.params.paraKey
      }
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60 * 60 * 24); // update every 24 hours
    return () => clearInterval(timer);
  }, []);

  const url = "https://7cf4-109-78-62-166.ngrok-free.app"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        //console.log(transactions)
        setItem(json.transactions.slice(-5));
        // const totalPrice = json.transactions.reduce((acc, transactions) => acc + transactions.price, 0);
        // if (theText) {
        //   const updatedTotalPrice = totalPrice + parseFloat(theText);
        //   setTotalPrice(updatedTotalPrice);
        // } else {
        //   setTotalPrice(totalPrice)
        // }
        // //setTotalPrice(totalPrice);
        console.log(json.transactions)
      })
      .catch((error) => console.error(error))
  }, []);

  const url2 = "https://7cf4-109-78-62-166.ngrok-free.app/theTotal"

  useEffect(() => {
    fetch(url2)
      .then((response) => response.json())
      .then((json) => {
        //console.log(transactions)
       setTotalPrice(json.total);
       if (theText) {
        const updatedTotalPrice = parseFloat(theText) - totalPrice;
        setTotalPrice(updatedTotalPrice);
      } else {
        setTotalPrice(totalPrice)
      }
        console.log(json.total)
      })
      .catch((error) => console.error(error))
  }, []);

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
              <View style={styles.dateSpace}></View>
              <View style={styles.dateTextContainer}>
               <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
              </View>
            </View>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.dateText}>Balance: €{totalPrice} </Text>
            </View>
            <View style={styles.spaceHome}>
              <View style={styles.entrySpace}></View>
            </View>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.loginSignUpText}>Recent Transactions:</Text>
            </View>
            <View style={styles.transactionSpace}>
                {item.length > 0? item.map((transactions) => {
                      return (
                        <View>
                        {/* // <View style={styles.button2}>  */}
                          <Text style={styles.text5}> {transactions.date} {"\n"} Item ID: {transactions.itemId} €{transactions.price} </Text>
                          {/* <Text style={styles.text1}>ID: {products.ourId}</Text> */}
                        </View>
                      );
                    }) : null}
            </View>
            <View style={styles.dateContainer}>
              <View style={styles.paymentButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Transaction')}>
              <Text style={styles.homeText}>Payment</Text>
              </TouchableOpacity>
              </View> 
              <View style={styles.paymentSpace}></View>
              <View style={styles.paymentButton}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Add Coin')}>
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