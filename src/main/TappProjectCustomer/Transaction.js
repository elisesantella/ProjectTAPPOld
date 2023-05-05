import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { Alert, ImageBackground, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/TransactionStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';
import { BarCodeScanner } from 'expo-barcode-scanner';

const URL = `https://84e2-109-78-225-88.ngrok-free.app`


function Transaction({ navigation, route }){
  const { data, usernameData, transactionData, balanceData } = route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('. . . waiting for fetch API');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data}) => {
    if (!data) {
      console.log('Error: No data found');
      return;
    }
    console.log(usernameData)
    setScanned(true);
    const price = data;
    console.log(price)
    try {
      const res = await fetch(
        URL + `/addtransaction/` + usernameData,
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          body:JSON.stringify({
            price: price 
          })
        }
      )
      const data = await res.json()
      console.log(data)
      setText(JSON.stringify(data))
      if (data.success) {
        const newBalance = Number(balanceData) - Number(price);
        // navigation.navigate('Home', {data: data, usernameData: usernameData, 
        //   transactionData: transactionData, balanceData: newBalance.toString()})
        //   Alert.alert(`Transaction Successful: ${price}TAPP`)
      }
    } catch (err) {
      console.log(err)
    }
  }
     

  if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
      return <Text>No access to camera</Text>;
  }

        

    return(
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.bodyContainer}>
        <ImageBackground 
              source={require('./BackgroundImages/backgroundTransaction.png')} 
              resizeMode= "stretch" 
              style={styles.background}>
          <View style={styles.contentContainer}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
              />
              {/* </View> */}
                {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
          </View>
          <View style={styles.space}></View>
          {scanned && <View style={styles.paymentButton}>
              {/* <Text style={styles.text}>Scan QR Code</Text> */}
              <TouchableOpacity 
                onPress={() => setScanned(false)}>
                <Text style={styles.text}>Scan QR Code</Text>
              </TouchableOpacity>
            </View>}
          </ImageBackground>
        </View>
        <Footer></Footer>
      </View>
    );
  }

  export default Transaction;