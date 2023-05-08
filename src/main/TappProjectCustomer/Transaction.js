import React,{useState, useEffect} from 'react';
import { Alert, ImageBackground, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import styles from './StyleSheets/TransactionStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from '@expo/vector-icons'; //return Arrow


const URL = `https://723e-51-37-102-201.ngrok-free.app`


function Transaction({ navigation, route }){
  const { data, usernameData, transactionData, balanceData } = route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('. . . waiting for fetch API');
  
  //console.log(balanceData)

  //Wait for permission to be granted to access camera 
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  //Once QR Code is scanne, sends price to server to create new transaction
  const handleBarCodeScanned = async ({ type, data}) => {
    if (!data) {
      console.log('Error: No data found');
      return;
    }
    console.log(usernameData)
    setScanned(true);
    const price = Number(data);
    console.log(price)
    console.log(balanceData)

  if(price < Number(balanceData)){
      try {
        const res = await fetch(
          URL + `/addtransaction/` + usernameData,
          {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              "ngrok-skip-browser-warning": "69420" 
            },
            body:JSON.stringify({
              price: price 
            })
          }
        )
        //const data = await res.json()
        //console.log(data)
        setText(JSON.stringify(data))
        //if (data.success) {
          //const newBalance = Number(balanceData) - Number(price);
          // navigation.navigate('Home', {data: data, usernameData: usernameData, 
          //   transactionData: transactionData, balanceData: newBalance.toString()})
          //   Alert.alert(`Transaction Successful: ${price}TAPP`)
          if (res.ok) {
            data = await res.json();
          // balanceData = data.balance;
            const transactionData = data.transactions
            //companyNameData = data.companyName
            console.log(data)
            //console.log(balanceData)
            console.log(transactionData)
            console.log(usernameData)
            //submitData1()
            //console.log(data)
            const newBalance = Number(balanceData) - Number(price);
            console.log(newBalance)
          // const transactionData1 = data.transactions
            //console.log(transactionData1)
            navigation.navigate('Home', {data: data, usernameData: usernameData, 
            transactionData: transactionData, balanceData: newBalance.toString()})
            Alert.alert(`Transaction Successful: ${price}TAPP`)
        }
      } catch (err) {
        console.log(err)
      }
  }
  else{
      Alert.alert(`Insufficient Funds!`)
    }
  }

 //Checking for permission
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
          </View>
          <View style={styles.space2}></View>
          <View style ={styles.buttonContainer}>
            <View style ={styles.buttonBox}> 
              <TouchableOpacity
                onPress={() => navigation.navigate('Home', {data: data, usernameData: usernameData, balanceData: balanceData, transactionData: transactionData})}>
                <Ionicons name="return-up-back-sharp" size={45} color="midnightblue" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.space}></View>
          {scanned && <View style={styles.paymentButton}>
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