import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './StyleSheets/HomeStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';


function Home({ navigation, route }) {
  const [date, setDate] = useState(new Date());
  const {data, companyNameData , transactionData, balanceData} = route.params; 

//UseEffect function to generate current data using Date() function
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60 * 60 * 24); // update every 24 hours
    return () => clearInterval(timer);
  }, []);

 // const url = "https://723e-51-37-102-201.ngrok-free.app"

  //console.log(transactionData)

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
                  <Text style={styles.bigText}>Log Out</Text>
                </TouchableOpacity>
              </View>
              <View style ={styles.spaceDate}/>
              <View style ={styles.date}>
                <Text style={styles.bigText}>
                  <Text>{date.toLocaleDateString()}</Text>
                </Text>
              </View>
            </View>
            <View style ={styles.space}/>
            <View style ={styles.balanceBox}>
              <Text style={styles.bigText}>
                <Text>Balance:</Text>
              </Text>
            </View>
            <View style ={styles.space}/>
            <View style ={styles.balanceDisplay}> 
             <Text style={styles.balanceText}>
                <Text>{balanceData} TAPP </Text>
              </Text>
            </View>
            <View style={styles.space}></View>
            <View style ={styles.recentTransBox}>
              <Text style={styles.bigText}> Recent Transactions: </Text>
            </View>
            <View style ={styles.space}/>
            <View style ={styles.transactionDisplay}>
              {transactionData.length > 0 ? (
                  transactionData.slice(Math.max(transactionData.length - 5, 0)).map((transaction, index) => (
                    <View key={index}>
                      <Text style={styles.transactionText}> {transaction.date} </Text>
                      <Text style={styles.transactionText}> {transaction.price} TAPP </Text>
                    </View>
                ))
                ) : ( 
                  <Text style={styles.transactionText}> No transactions </Text>
              )}
            </View>
            <View style ={styles.space}/>
            <View style ={styles.makeSaleButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Amount', {data: data, companyNameData: companyNameData, transactionData: transactionData, balanceData: balanceData})}>
                <Text style={styles.bigText}>Make Sale</Text>
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