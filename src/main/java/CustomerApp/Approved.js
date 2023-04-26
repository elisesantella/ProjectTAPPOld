import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import {Box, ImageBackground, Image, StyleSheet, Text, TouchableOpacity, NativeBaseProvider, View, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/ApprovedStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';


function Approved({ navigation, route}) {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState([]);

  const url = "https://7cf4-109-78-62-166.ngrok-free.app/addItem"

  // const getData = () => {
  //     return fetch('https://wise-bees-tie-51-37-107-118.loca.lt')
  //     .then((response) => response.json())
  //     .then( (responsejson) => {
  //       setNumber: responsejson.dataVariable
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPrice(json.price);
      })
      .catch((error) => console.error(error))
  }, []);

  // const renderData = ({item}) => {
  //   return (
  //     <View style={{margin:10,borderWidth:0.5,padding:10}}>
  //       <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>
  //         Amount {item.dataVariable}
  //       </Text>
  //     </View>
  //   )
  // }

    return(
        <View style={styles.container}>
          {/* <Text style={styles.text}>
            Amount {number}
          </Text> */}
          <Header></Header>
          <View style ={styles.mainBody}>
          <ImageBackground 
            source={require('./BackgroundImages/backgroundApproved.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
            <View style ={styles.content}>
              <View style ={styles.textBox}>
                <Text style={styles.text}>
                  <Text>Transaction Approved</Text>
                </Text>
              </View>
              <View style ={styles.space1}/>
              <View style ={styles.textBox}>
              
                <Text style={styles.text}>
                  <Text>Amount Of:  €{price} </Text>
                </Text>
              
              </View>
              <View style ={styles.space2}>
              <View style ={styles.entry}/>
              </View> 
              <View style ={styles.space2}/>
                <View style ={styles.buttonReturn}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textReturn}>Return to Home</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
          </View>
          <Footer></Footer>
        </View>
      );
    }
  
  export default Approved;