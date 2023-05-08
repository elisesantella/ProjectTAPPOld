import React, {useState, useEffect} from 'react';
import { ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import styles from './StyleSheets/HomeStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

function Home({ navigation, route }){
  
  // const { usernameId, balance } = route.params;
  const [date, setDate] = useState(new Date());
  // const [item, setItem] = useState([])
  // const [totalPrice, setTotalPrice] = useState(0);
  const {data, usernameData , transactionData, balanceData } = route.params; //PRETTY SURE CAN ACCESS BALANCE & TRANSACTIONS USING DATA.BALANCE/DATA.TRANSACTIONS

  
//UseEffect function to generate current data using Date() function
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60 * 60 * 24); // update every 24 hours
    return () => clearInterval(timer);
  }, []);

  //const url = "https://7cf4-109-78-62-166.ngrok-free.app"
  //console.log(data)
  //console.log(transactionData)

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
                  <Text style={styles.bigText}>Log Out</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateSpace}></View>
              <View style={styles.dateTextContainer}>
               <Text style={styles.bigText}>{date.toLocaleDateString()}</Text>
              </View>
            </View>
            <View style ={styles.space}/>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.bigText}>Balance: </Text>
            </View>
            <View style ={styles.space}/>
            <View style ={styles.balanceSpace}> 
             <Text style={styles.smallText}>
                <Text>{balanceData} TAPP </Text>
              </Text>
            </View>
            <View style={styles.space}></View>
            <View style ={styles.loginSignUpButton}>
              <Text style={styles.bigText}>Recent Transactions:</Text>
            </View>
            <View style={styles.transactionSpace}>
              {transactionData.length > 0 ? (
                  transactionData.slice(Math.max(transactionData.length - 5, 0)).map((transaction, index) => (
                    <View key={index}>
                      <Text style={styles.smallText}> {transaction.date}  </Text>
                      <Text style={styles.smallText}> {transaction.price} TAPP </Text>
                    </View>
                ))
                ) : ( 
                  <Text style={styles.smallText}> No transactions </Text>
                )}
            </View>
            <View style={styles.dateContainer}>
              <View style={styles.paymentButton}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Transaction', {data: data, usernameData: usernameData, transactionData: transactionData, balanceData: balanceData})}>
                  <Text style={styles.buttonText}>Payment</Text>
                </TouchableOpacity>
              </View> 
              <View style={styles.buttonSpace}></View>
              <View style={styles.paymentButton}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Add Coin', {usernameData: usernameData, balanceData: balanceData, transactionData: transactionData})}>
                  <Text style={styles.buttonText}>Add Coin</Text>
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