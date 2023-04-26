import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { ImageBackground, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './StyleSheets/TransactionStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';
import { BarCodeScanner } from 'expo-barcode-scanner';

function Transaction({ navigation }){
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('Approved')
  };

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
            {/* <View style={styles.qrContainer}> */}
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
    //   <View style={styles.container}>
    //     <Header></Header>
    //     <View style={styles.bodyContainer}>
    //       <ImageBackground 
    //           source={require('./backgroundTransaction.png')} 
    //           resizeMode= "stretch" 
    //           style={styles.background}>
    //         <View style={styles.contentContainer}>
    //           <View style={styles.qrContainer}>
    //             <BarCodeScanner>
    //               onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    //               style={[StyleSheet.absoluteFillObject, styles.qrContainer]}>
    //              <Text style={styles.text}>Scan your QR code</Text>
    //              <Image
    //                 style={styles.qr}/>
    //             </BarCodeScanner>
    //             {scanned && (
    //               <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
    //             )}
    //           </View>
    //           <View style={styles.space}></View>
    //           <View style ={styles.textBox}>
    //             <Text style={styles.text}>Scan QR Code</Text>
    //             <TouchableOpacity
    //             onPress={() => navigation.navigate('Approved')}>
    //             <Text style={styles.textConfirm}>OK</Text>
    //             </TouchableOpacity>
    //           </View>
    //           <View style={styles.space}></View>
    //         </View>
    //       </ImageBackground>
    //     </View>
    //     <Footer></Footer>
    // </View>
    );
  }

  export default Transaction;