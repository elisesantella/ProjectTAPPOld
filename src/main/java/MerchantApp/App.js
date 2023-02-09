import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, SafeAreaView, TextInput, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import  Amount  from './Amount';
import Home from './Home';
import SignUp from './SignUp';
import Start from './Start';
import Transaction from './Transaction';
import Approved from './Approved';
import Amount from './Amount';


const Stack = createNativeStackNavigator();


export default function App() 
{

//   handlePress()
//   {
//   fetch('http://10.222.22.22:3000/',{
//     method: 'POST',
//     body: JSON.stringify({
//       a:'hello'
//     }),
//     headers:{"Content-Type": "application/json"}
//   })
//   .then(function(response){
//     return response.json()
//   }).catch(error => console.log(error));
//   }

  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Amount/>
    // </View>
    <NavigationContainer>
    <Stack.Navigator initalRouteName="Start">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Amount" component={Amount} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="Approved" component={Approved} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  // headerContainer: {
  //   flexDirection: "row",
  //   backgroundColor: "aliceblue",
  //   height: "15%",
  //   width: '100%',
  //   borderWidth: 5,
  //   borderColor: "teal",
  // },
  // ATUContainer: {
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '40%',
  //   justifyContent: "flex-start",
  //   //borderWidth: 5,
  //   //borderColor: "red",
  // },
  // ATUimage: {
  //   height: "100%",
  //   width: "100%",
  //   //borderWidth: 5,
  //   //borderColor: "teal",
  // },
  // image: {
  //   height: 100,
  //   width: 100,
  //   resizeMode: "contain",
  // },
  // spaceHeader: {
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '10%',
  //   justifyContent: "center",
  //   //borderWidth: 5,
  //   //borderColor: "black",
  // },
  // TAPPContainer: {
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '50%',
  //   justifyContent: "flex-end",
  //   //borderWidth: 5,
  //   //borderColor: "yellow",
  // },
  // spaceHeader2: {
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '5%',
  //   justifyContent: "center",
  //   //borderWidth: 5,
  //   //borderColor: "black",
  // },
  // TAPPContainer2: {
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '55%',
  //   justifyContent: "flex-end",
  //   padding: 5,
  //   //borderWidth: 5,
  //   //borderColor: "yellow",
  // },
  // logoContainer: {
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '22%',
  //   justifyContent: "center",
  //   //borderWidth: 5,
  //   //borderColor: "black",
  // },
  // TAPPtext: {
  //   textAlign: "left",
  //   fontSize: 60,
  //   fontWeight: "bold",
  //   color: "teal",
  //   padding: 10,
  //   //borderWidth: 5,
  //   //borderColor: "red",
  // },
  // mainBody: {
  //   flexDirection: "column",
  //   backgroundColor: "powderblue",
  //   height: "70%",
  //   width: '100%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // contentOne: {
  //   //borderWidth: 5,
  //   //borderColor: "teal",
  //   height: "80%",
  //   width: '60%',
  // },
  // contents2: {
  //   //borderWidth: 5,
  //   //borderColor: "yellow",
  //   height: "80%",
  //   width: '80%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // QRcontainer: {
  //   borderWidth: 5,
  //   borderColor: "red",
  //   height: "50%",
  //   width: '80%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // buttonConfirm: {
  //   backgroundColor: "teal",
  //   borderWidth: 5,
  //   borderColor: "darkslategrey",
  //   height: "20%",
  //   width: '50%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // buttonOk: {
  //   backgroundColor: "teal",
  //   borderWidth: 5,
  //   borderColor: "darkslategrey",
  //   height: "15%",
  //   width: '40%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // buttonReturn: {
  //   backgroundColor: "teal",
  //   borderWidth: 5,
  //   borderColor: "darkslategrey",
  //   height: "15%",
  //   width: '60%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // buttonMakeSale: {
  //   backgroundColor: "cadetblue",
  //   borderWidth: 5,
  //   borderColor: "teal",
  //   height: "15%",
  //   width: '50%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // textConfirm: {
  //   textAlign: "center",
  //   fontSize: 25,
  //   fontWeight: "bold",
  //   color: "white",
  //   //borderWidth: 5,
  //   //borderColor: "yellow",
  // },
  // text2: {
  //   textAlign: "center",
  //   fontSize: 25,
  //   fontWeight: "bold",
  //   color: "black",
  //   //borderWidth: 5,
  //   //borderColor: "yellow",
  // },
  // loginSignUpButton: {
  //   backgroundColor: "cadetblue",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "15%",
  //   width: '100%',
  //   borderWidth: 5,
  //   borderColor: "teal",
  // },
  // text: {
  //   textAlign: "center",
  //   fontSize: 25,
  //   fontWeight: "bold",
  //   color: "black",
  //   //borderWidth: 5,
  //   //borderColor: "yellow",
  // },
  // spaceLoginSignUp: {
  //   height: "15%",
  //   width: '100%',
  //   //borderWidth: 5,
  //   //borderColor: "red",
  //   padding: 15,
  // },
  // companyEntry: {
  //   backgroundColor: "white",
  //   height: "15%",
  //   width: '100%',
  //   //borderWidth: 5,
  //   //borderColor: "red",
  //   padding: 15,
  // },
  // pinEntry: {
  //   backgroundColor: "white",
  //   height: "15%",
  //   width: '100%',
  //   //borderWidth: 5,
  //   //borderColor: "red",
  //   padding: 15,
  // },
  // transitionEntry: {
  //   backgroundColor: "white",
  //   height: "45%",
  //   width: '90%',
  //   borderWidth: 2,
  //   borderColor: "black",
  //   padding: 15,
  // },
  // spaceHome: {
  //   height: "5%",
  //   width: '100%',
  //   //borderWidth: 5,
  //   //borderColor: "red",
  //   padding: 5,
  // },
  // spaceDate: {
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '60%',
  //   justifyContent: "flex-start",
  //   //borderWidth: 5,
  //   //borderColor: "blue",
  // },
  // DateContainer: {
  //   flexDirection: "row",
  //   height: "10%",
  //   width: '100%',
  //   //borderWidth: 5,
  //   //borderColor: "black",
  // },
  // Date: {
  //   backgroundColor: "aliceblue",
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '40%',
  //   borderWidth: 2,
  //   borderColor: "teal",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // textDate: {
  //   textAlign: "center",
  //   fontSize: 10,
  //   fontWeight: "bold",
  //   color: "black",
  //   //borderWidth: 5,
  //   //borderColor: "yellow",
  // },
  // imageContainer: {
  //   backgroundColor: "white",
  //   borderWidth: 5,
  //   borderColor: "teal",
  //   height: "40%",
  //   width: '100%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // Logoimage: {
  //   height: "100%",
  //   width: "100%",
  //   //borderWidth: 5,
  //   //borderColor: "teal",
  //   resizeMode: "contain",
  // },
  // Logoimage: {
  //   height: "100%",
  //   width: "100%",
  //   //borderWidth: 5,
  //   //borderColor: "teal",
  //   resizeMode: "contain",
  // },
  // footer: {
  //   flexDirection: "row",
  //   backgroundColor: "teal",
  //   height: "8%",
  //   width: '100%',
  //   //borderWidth: 5,
  //   //borderColor: "yellow",
  // },
  // footerContent:{
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '50%',
  //   justifyContent: "flex-start",
  //   //borderWidth: 5,
  //   //borderColor: "red",
  //   padding: 15,
  // },
  // spaceFooter: {
  //   flexDirection: "row",
  //   height: "100%",
  //   width: '50%',
  //   justifyContent: "flex-end",
  //   //borderWidth: 5,
  //   //borderColor: "black",
  // },
  // versionText: {
  //   textAlign: "left",
  //   fontSize: 17,
  //   fontWeight: "bold",
  //   color: "aliceblue",
  //   //borderWidth: 2,
  //   //borderColor: "blue",
  // },
  // input: {
  //   height: 50,
  //   margin: 12,
  //   borderWidth: 5,
  //   padding: 10,
  //   borderColor: "teal",
  //   backgroundColor: "white",
  //   textAlign: "center",
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
});

// function StartScreen({ navigation }) {
//   return(
//     <View style={styles.container}>
//       <View style ={styles.headerContainer}>
//         <View style ={styles.ATUContainer}>
//                 <Image 
//                   style={styles.ATUimage}
//                   source={require('./ATU_Logo.png')} />
//               </View>
//         <View style ={styles.spaceHeader}/>
//         <View style ={styles.TAPPContainer}>
//         <Text style={styles.TAPPtext}>
//             <Text>TAPP</Text>
//           </Text>
//         </View>
//       </View>
//       <View style ={styles.mainBody}>
//         <View style ={styles.contentOne}>
//           <View style ={styles.loginSignUpButton}>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.text}>Login</Text>
//             </TouchableOpacity>
//           </View>
//           <View style ={styles.spaceLoginSignUp}/>
//           <View style ={styles.loginSignUpButton}>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('SignUp')}>
//             <Text style={styles.text}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//           <View style ={styles.spaceLoginSignUp}/>
//             <View style ={styles.imageContainer}>
//               <View style ={styles.Logoimage}>
//                 <Image 
//                   style={styles.Logoimage}
//                   source={require('./TappLogo.png')} />
//               </View>
//             </View>
//         </View>
//       </View>
//       <View style ={styles.footer}>
//         <View style ={styles.footerContent}>
//           <Text style={styles.versionText}>
//             <Text>Merchant Version</Text>
//           </Text>
//         </View>
//         <View style ={styles.spaceFooter}/>
//       </View>
//     </View>
//   );
// }

// function SignUpScreen({ navigation }){
//   return(
//     <View style={styles.container}>
//       <View style ={styles.headerContainer}>
//         <View style ={styles.ATUContainer}>
//         <View style ={styles.ATUimage}>
//                 <Image 
//                   style={styles.ATUimage}
//                   source={require('./ATU_Logo.png')} />
//               </View>
//               </View>
//         <View style ={styles.spaceHeader2}/>
//         <View style ={styles.TAPPContainer2}>
//         <View style ={styles.logoContainer}>
//         <Image 
//                   style={styles.ATUimage}
//                   source={require('./TappLogo.png')} />
//               </View>
//         <Text style={styles.TAPPtext}>
//             <Text>TAPP</Text>
//           </Text>
//         </View>
//       </View>
//       <View style ={styles.mainBody}>
//         <View style ={styles.contents2}>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.text2}>
//               <Text>Enter Company Name</Text>
//             </Text>
//           </View>
//           <View style ={styles.spaceLoginSignUp}>
//           <View style ={styles.companyEntry}/>
//           </View> 
//           <View style ={styles.loginSignUpButton}>
//           <Text style={styles.text2}>
//               <Text>Enter a PIN</Text>
//             </Text>
//           </View>
//           <View style ={styles.spaceLoginSignUp}>
//           <View style ={styles.pinEntry}/>
//           </View> 
//             <View style ={styles.buttonConfirm}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Start')}>
//             <Text style={styles.textConfirm}>Confirm</Text>
//             </TouchableOpacity>
//             </View>
//         </View>
//       </View>
//       <View style ={styles.footer}>
//         <View style ={styles.footerContent}>
//           <Text style={styles.versionText}>
//             <Text>Merchant Version</Text>
//           </Text>
//         </View>
//         <View style ={styles.spaceFooter}/>
//       </View>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return(
//     <View style={styles.container}>
//       <View style ={styles.headerContainer}>
//         <View style ={styles.ATUContainer}>
//         <View style ={styles.ATUimage}>
//                 <Image 
//                   style={styles.ATUimage}
//                   source={require('./ATU_Logo.png')} />
//               </View>
//               </View>
//         <View style ={styles.spaceHeader2}/>
//         <View style ={styles.TAPPContainer2}>
//         <View style ={styles.logoContainer}>
//         <Image 
//                   style={styles.ATUimage}
//                   source={require('./TappLogo.png')} />
//               </View>
//         <Text style={styles.TAPPtext}>
//             <Text>TAPP</Text>
//           </Text>
//         </View>
//       </View>
//       <View style ={styles.mainBody}>
//         <View style ={styles.contents2}>
//         <View style ={styles.DateContainer}>
//         <View style ={styles.spaceDate}/>
//           <View style ={styles.Date}>
//           <Text style={styles.text2}>
//             <Text>DATE:</Text>
//           </Text>
//           </View>
//         </View>
//         <View style ={styles.spaceHome}/>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.text2}>
//               <Text>Recent Transactions:</Text>
//             </Text>
//           </View>
//           <View style ={styles.spaceHome}/>
//           <View style ={styles.transitionEntry}/>
//           <View style ={styles.spaceHome}/>
//             <View style ={styles.buttonMakeSale}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Amount')}>
//             <Text style={styles.text}>Make Sale</Text>
//             </TouchableOpacity>
//             </View>
//         </View>
//       </View>
//       <View style ={styles.footer}>
//         <View style ={styles.footerContent}>
//           <Text style={styles.versionText}>
//             <Text>Merchant Version</Text>
//           </Text>
//         </View>
//         <View style ={styles.spaceFooter}/>
//       </View>
//     </View>
//   );
// }

// function Amount ({ navigation }) {

//     const [number, onChangeNumber] = React.useState(null);

//     return (
//     //const [text, onChangeText] = React.useState("Useless Text");
//     <View style={styles.container}>
//       <View style ={styles.headerContainer}>
//         <View style ={styles.ATUContainer}>
//         <View style ={styles.ATUimage}>
//                 <Image 
//                   style={styles.ATUimage}
//                   source={require('./ATU_Logo.png')} />
//               </View>
//               </View>
//         <View style ={styles.spaceHeader2}/>
//         <View style ={styles.TAPPContainer2}>
//         <View style ={styles.logoContainer}>
//         <Image 
//                   style={styles.ATUimage}
//                   source={require('./TappLogo.png')} />
//               </View>
//         <Text style={styles.TAPPtext}>
//             <Text>TAPP</Text>
//           </Text>
//         </View>
//       </View>
//       <View style ={styles.mainBody}>
//         <View style ={styles.contents2}>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.text2}>
//               <Text>Enter Transaction Amount:</Text>
//             </Text>
//           </View>
//           <View style ={styles.spaceLoginSignUp}>
//             <SafeAreaView>
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={onChangeNumber}
//                     value={number}
//                     placeholder="useless placeholder"
//                     keyboardType="numeric"
//                 />
//             </SafeAreaView>
//           </View> 
//           <View style ={styles.spaceLoginSignUp}/>
//             <View style ={styles.buttonOk}>
//             <TouchableOpacity
//             onPress={ () => navigation.navigate('Transaction')}>
//             <Text style={styles.textConfirm}>OK</Text>
//             </TouchableOpacity>
//             </View>
//         </View>
//       </View>
//       <View style ={styles.footer}>
//         <View style ={styles.footerContent}>
//           <Text style={styles.versionText}>
//             <Text>Merchant Version</Text>
//           </Text>
//         </View>
//         <View style ={styles.spaceFooter}/>
//       </View>
//     </View>
//     )
// }


// function TransactionScreen({ navigation }){
//   return(
//     <View style={styles.container}>
//       <View style ={styles.headerContainer}>
//         <View style ={styles.ATUContainer}>
//         <View style ={styles.ATUimage}>
//                 <Image 
//                   style={styles.ATUimage}
//                   source={require('./ATU_Logo.png')} />
//               </View>
//               </View>
//         <View style ={styles.spaceHeader2}/>
//         <View style ={styles.TAPPContainer2}>
//         <View style ={styles.logoContainer}>
//         <Image 
//                   style={styles.ATUimage}
//                   source={require('./TappLogo.png')} />
//               </View>
//         <Text style={styles.TAPPtext}>
//             <Text>TAPP</Text>
//           </Text>
//         </View>
//       </View>
//       <View style ={styles.mainBody}>
//         <View style ={styles.contents2}>
//         <View style ={styles.QRcontainer}/>
//         <View style ={styles.spaceHome}/>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.text2}>
//               <Text>€ Amount:</Text>
//             </Text>
//           </View>
//           <View style ={styles.spaceLoginSignUp}>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Approved')}>
//             <Text style={styles.textConfirm}>OK</Text>
//             </TouchableOpacity>
//           <View style ={styles.companyEntry}/>
//           </View> 
//         </View>
//       </View>
//       <View style ={styles.footer}>
//         <View style ={styles.footerContent}>
//           <Text style={styles.versionText}>
//             <Text>Merchant Version</Text>
//           </Text>
//         </View>
//         <View style ={styles.spaceFooter}/>
//       </View>
//     </View>
//   );
// }

// function ApprovedScreen({ navigation }){
//   return(
//     <View style={styles.container}>
//       <View style ={styles.headerContainer}>
//         <View style ={styles.ATUContainer}>
//         <View style ={styles.ATUimage}>
//                 <Image 
//                   style={styles.ATUimage}
//                   source={require('./ATU_Logo.png')} />
//               </View>
//               </View>
//         <View style ={styles.spaceHeader2}/>
//         <View style ={styles.TAPPContainer2}>
//         <View style ={styles.logoContainer}>
//         <Image 
//                   style={styles.ATUimage}
//                   source={require('./TappLogo.png')} />
//               </View>
//         <Text style={styles.TAPPtext}>
//             <Text>TAPP</Text>
//           </Text>
//         </View>
//       </View>
//       <View style ={styles.mainBody}>
//         <View style ={styles.contents2}>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.text2}>
//               <Text>Transaction Approved</Text>
//             </Text>
//           </View>
//           <View style ={styles.spaceHome}/>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.text2}>
//               <Text>Amount Of:</Text>
//             </Text>
//           </View>
//           <View style ={styles.spaceLoginSignUp}>
//           <View style ={styles.companyEntry}/>
//           </View> 
//           <View style ={styles.spaceLoginSignUp}/>
//             <View style ={styles.buttonReturn}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.textConfirm}>Return to Home</Text>
//             </TouchableOpacity>
//             </View>
//         </View>
//       </View>
//       <View style ={styles.footer}>
//         <View style ={styles.footerContent}>
//           <Text style={styles.versionText}>
//             <Text>Merchant Version</Text>
//           </Text>
//         </View>
//         <View style ={styles.spaceFooter}/>
//       </View>
//     </View>
//   );
// }