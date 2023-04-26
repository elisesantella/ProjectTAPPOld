import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/HomeStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';


function Home({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  //const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState([]);

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
        const totalPrice = json.transactions.reduce((acc, transactions) => acc + transactions.price, 0);
        setTotalPrice(totalPrice);
        console.log(totalPrice)
      })
      .catch((error) => console.error(error))
  }, []);

  // const url = "https://64e5-109-76-217-145.ngrok-free.app/theBalance"

  // useEffect(() => {
  //   fetchBalance();
  //   // Fetch balance every 5 seconds
  //   const intervalId = setInterval(fetchBalance, 5000);

  //   return () => clearInterval(intervalId);
  //   // fetch(url)
  //   //   .then((sum) => sum.json())
  //   //   .then((json) => {
  //   //     setBalance(json.sum);
  //   //     console.log(json);
  //   //   })
  //   //   .catch((error) => console.error(error))
  // }, []);

  // const fetchBalance = () => {
  //   fetch('https://64e5-109-76-217-145.ngrok-free.app/theBalance')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBalance(data.sum);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

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
                <Text>Balance: €{totalPrice} </Text>
              </Text>
            </View>
            <View style={styles.spaceHome}>
              <View style={styles.balanceSpace}></View>
            </View>
            <View style ={styles.recentTransBox}>
              <Text style={styles.text}> Recent Transactions: </Text>
                {/* <Text>Recent Transactions: </Text> */}
             {/* </Text> */}
            </View>
            <View style ={styles.space}/>
            <View style ={styles.transactionEntry}>
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

export default Home;