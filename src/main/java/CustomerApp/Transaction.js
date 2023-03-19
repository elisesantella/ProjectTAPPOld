import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { ImageBackground, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
              source={require('./backgroundTransaction.png')}
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "column",
    },
    qr: {
      // marginTop: '20%',
      // marginBottom: '20%',
      width: "50%",
      //height: qrSize,
    },
    bodyContainer: {
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
    contentContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: "60%",
      width: '80%',
      //borderWidth: 5,
      //borderColor: "teal",
    },
    qrContainer: {
      borderWidth: 5,
      borderColor: "red",
      height: "90%",
      width: '90%',
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
      color: "white",
    },
    space: {
      height: "15%",
      width: '100%',
     // borderWidth: 5,
      //borderColor: "red",
      padding: 15,
    },
    paymentButton: {
      padding: 5,
      backgroundColor: "cadetblue",
      borderWidth: 5,
      borderColor: "teal",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "18%",
      width: '48%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
  });
  

  export default Transaction;