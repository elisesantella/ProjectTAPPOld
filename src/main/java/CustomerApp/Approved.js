import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import {Box, ImageBackground, Image, StyleSheet, Text, TouchableOpacity, NativeBaseProvider, View, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';


function Approved({ navigation, route}) {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState([]);

  const url = "https://fancy-berries-bow-109-76-217-145.loca.lt/theNumber"

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
        setNumber(json.dataVariable);
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
            source={require('./backgroundApproved.png')} 
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
                  <Text>Amount Of:  €{number} </Text>
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
    textBox: {
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
    space1: {
      height: "5%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "red",
      padding: 5,
    },
    space2: {
      height: "15%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "red",
      padding: 15,
    },
    entry: {
        backgroundColor: "white",
        height: "15%",
        width: '100%',
        borderWidth: 3,
        borderColor: "teal",
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    buttonReturn: {
        backgroundColor: "teal",
        borderWidth: 5,
        borderColor: "darkslategrey",
        height: "19%",
        width: '60%',
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
    textReturn: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        //borderWidth: 5,
        //borderColor: "yellow",
    },
});
  

  export default Approved;