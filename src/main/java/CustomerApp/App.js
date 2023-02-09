import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
  TouchableWithoutFeedback, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Start'
import SignUp from './SignUp'
import Home from './Home'
import Transaction from './Transaction'
import Add from './AddCoin'
import Approved from './Approved'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initalRouteName="Start">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="Add Coin" component={Add} />
      <Stack.Screen name="Approved" component={Approved} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

// function StartScreen({ navigation }) {
//   return(
//     <View style={styles.container}>
//        <View style={styles.headerContainer}>
//         <View style={styles.atuLogoContainer}>
//           <Image 
//             style={styles.atuImage}
//             source={require('./ATU_Logo.png')} />
//         </View>
//         <View style={styles.spaceHeader}></View>
//         <View style={styles.tappContainer}>
//           <Text style={styles.tappText}>
//             <Text>TAPP</Text>
//           </Text>
//         </View>
//        </View>
//        <View style={styles.bodyContainer}>
//         <View style={styles.contentContainer}>
//           <View style ={styles.loginSignUpButton}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.loginSignUpText}>Login</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.spaceLoginSignUp}></View>
//           <View style ={styles.loginSignUpButton}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Sign Up')}>
//             <Text style={styles.loginSignUpText}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.spaceLoginSignUp}></View>
//           <View style={styles.tappLogoContainer}>
//             <Image 
//               style={styles.tappLogoimage}
//               source={require('./TappLogo.png')} />
//           </View>
//         </View>
//        </View>
//        <View style={styles.footerContainer}>
//          <View style={styles.versionContainer}>
//           <Text style={styles.versionText}>
//             <Text>Customer Version</Text>
//           </Text>
//          </View>
//        </View>
//       </View>
//   );
// }

// function SignUpScreen({ navigation }){
//   return(
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <View style={styles.atuLogoContainer}>
//           <Image 
//             style={styles.atuImage}
//             source={require('./ATU_Logo.png')} />
//         </View>
//         <View style={styles.spaceHeader}></View>
//         <View style={styles.tappContainer2}>
//           <View style={styles.tappHeaderlogoContainer}>
//             <Image 
//             style={styles.tappLogoimage}
//             source={require('./TappLogo.png')} />
//           </View>
//             <Text style={styles.tappText}>
//              <Text>TAPP</Text>
//             </Text>
//         </View>
//       </View>
//       <View style={styles.bodyContainer}>
//         <View style={styles.contentContainer}>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.loginSignUpText}>Enter Username:</Text>
//           </View>
//           <View style={styles.spaceLoginSignUp}>
//             <View style={styles.entrySpace}></View>
//           </View>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.loginSignUpText}>Enter Password:</Text>
//           </View>
//           <View style={styles.spaceLoginSignUp}>
//             <View style={styles.entrySpace}></View>
//           </View>
//           <View style={styles.confirmButton}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Start')}>
//             <Text style={styles.whiteText}>Confirm</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <View style={styles.footerContainer}>
//         <View style={styles.versionContainer}>
//           <Text style={styles.versionText}>
//             <Text>Customer Version</Text>
//           </Text>
//          </View>
//       </View>
//     </View>
//   );
// }

// function HomeScreen({ navigation }){
//   return(
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <View style={styles.atuLogoContainer}>
//           <Image 
//             style={styles.atuImage}
//             source={require('./ATU_Logo.png')} />
//         </View>
//         <View style={styles.spaceHeader}></View>
//         <View style={styles.tappContainer2}>
//           <View style={styles.tappHeaderlogoContainer}>
//             <Image 
//             style={styles.tappLogoimage}
//             source={require('./TappLogo.png')} />
//           </View>
//             <Text style={styles.tappText}>
//              <Text>TAPP</Text>
//             </Text>
//         </View>
//       </View>
//       <View style={styles.bodyContainer}>
//         <View style={styles.contentContainer}>
//           <View style={styles.dateContainer}>
//             <View style={styles.dateSpace}></View>
//             <View style={styles.dateTextContainer}>
//              <Text style={styles.dateText}>Date:</Text>
//             </View>
//           </View>

//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.dateText}>Balance:</Text>
//           </View>
//           <View style={styles.spaceHome}>
//             <View style={styles.entrySpace}></View>
//           </View>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.loginSignUpText}>Recent Transactions:</Text>
//           </View>
//           <View style={styles.transactionSpace}></View>
//           <View style={styles.dateContainer}>
//             <View style={styles.paymentButton}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Transaction')}>
//             <Text style={styles.homeText}>Payment</Text>
//             </TouchableOpacity>
//             </View> 
//             <View style={styles.paymentSpace}></View>
//             <View style={styles.paymentButton}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Add Coin')}>
//             <Text style={styles.homeText}>Add Coin</Text>
//             </TouchableOpacity>
//             </View> 
//           </View>
//         </View>
//       </View>
//       <View style={styles.footerContainer}>
//         <View style={styles.versionContainer}>
//           <Text style={styles.versionText}>
//             <Text>Customer Version</Text>
//           </Text>
//          </View>
//       </View>
//     </View>
//   );
// }

// function TransactionScreen({ navigation }){
//   return(
//     <View style={styles.container}>
//     <View style={styles.headerContainer}>
//         <View style={styles.atuLogoContainer}>
//           <Image 
//             style={styles.atuImage}
//             source={require('./ATU_Logo.png')} />
//         </View>
//         <View style={styles.spaceHeader}></View>
//         <View style={styles.tappContainer2}>
//           <View style={styles.tappHeaderlogoContainer}>
//             <Image 
//             style={styles.tappLogoimage}
//             source={require('./TappLogo.png')} />
//           </View>
//             <Text style={styles.tappText}>
//              <Text>TAPP</Text>
//             </Text>
//         </View>
//       </View>
//       <View style={styles.bodyContainer}>
//         <View style={styles.contentContainer}>
//         <View style={styles.qrContainer}></View>
//         <View style={styles.spaceLoginSignUp}></View>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.dateText}>Scan QR Code</Text>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Approved')}>
//             <Text style={styles.textConfirm}>OK</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.spaceLoginSignUp}></View>
//         </View>
//       </View>
//       <View style={styles.footerContainer}>
//         <View style={styles.versionContainer}>
//           <Text style={styles.versionText}>
//             <Text>Customer Version</Text>
//           </Text>
//          </View>
//       </View>
//   </View>
//   );
// }

// function AddCoinScreen({ navigation }){
//   return(
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <View style={styles.atuLogoContainer}>
//           <Image 
//             style={styles.atuImage}
//             source={require('./ATU_Logo.png')} />
//         </View>
//         <View style={styles.spaceHeader}></View>
//         <View style={styles.tappContainer2}>
//           <View style={styles.tappHeaderlogoContainer}>
//             <Image 
//             style={styles.tappLogoimage}
//             source={require('./TappLogo.png')} />
//           </View>
//             <Text style={styles.tappText}>
//              <Text>TAPP</Text>
//             </Text>
//         </View>
//       </View>
//       <View style={styles.bodyContainer}>
//         <View style={styles.contentContainer}>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.dateText}>Enter Coin Amount:</Text>
//           </View>
//           <View style={styles.spaceLoginSignUp}>
//             <View style={styles.entrySpace}></View>
//           </View>
//           <View style={styles.spaceLoginSignUp}></View>
//           <View style={styles.confirmButton}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.whiteText}>Approve</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <View style={styles.footerContainer}>
//         <View style={styles.versionContainer}>
//           <Text style={styles.versionText}>
//             <Text>Customer Version</Text>
//           </Text>
//          </View>
//       </View>
//     </View>
//   );
// }

// function ApprovedScreen({ navigation }){
//   return(
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <View style={styles.atuLogoContainer}>
//           <Image 
//             style={styles.atuImage}
//             source={require('./ATU_Logo.png')} />
//         </View>
//         <View style={styles.spaceHeader}></View>
//         <View style={styles.tappContainer2}>
//           <View style={styles.tappHeaderlogoContainer}>
//             <Image 
//             style={styles.tappLogoimage}
//             source={require('./TappLogo.png')} />
//           </View>
//             <Text style={styles.tappText}>
//              <Text>TAPP</Text>
//             </Text>
//         </View>
//       </View>
//       <View style={styles.bodyContainer}>
//         <View style={styles.contentContainer}>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.dateText}>Transaction Approved</Text>
//           </View>
//           <View style={styles.spaceApproved}></View>
//           <View style ={styles.loginSignUpButton}>
//             <Text style={styles.dateText}>Amount Of:</Text>
//           </View>
//           <View style={styles.spaceLoginSignUp}>
//             <View style={styles.entrySpace}></View>
//           </View>
//           <View style={styles.spaceLoginSignUp}></View>
//           <View style={styles.buttonReturn}>
//             <TouchableOpacity
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.whiteText}>Return to Home</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <View style={styles.footerContainer}>
//         <View style={styles.versionContainer}>
//           <Text style={styles.versionText}>
//             <Text>Customer Version</Text>
//           </Text>
//          </View>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     flexDirection: "column",
//   },
//   headerContainer: {
//   flexDirection: "row",
//   backgroundColor: "white",
//   height: "15%",
//   width: '100%',
//   borderWidth: 5,
//   borderColor: "teal",
//   },
//   bodyContainer: {
//   flexDirection: "column",
//   backgroundColor: "powderblue",
//   height: "70%",
//   width: '100%',
//   justifyContent: "center",
//   alignItems: "center",
//   },
//   footerContainer: {
//     flexDirection: "row",
//     backgroundColor: "teal",
//     height: "8%",
//     width: '100%',
//   },
//   atuLogoContainer: {
//     flexDirection: "row",
//     height: "100%",
//     width: '40%',
//     justifyContent: "flex-start",
//     alignItems: "center", 
//     //borderWidth: 5,
//     //borderColor: "red",
//   },
//   atuImage: {
//     height: "100%",
//     width: "100%",
//     resizeMode: "contain", 
//     transform: [{ scale: 2.55}],
//   },
//   spaceHeader: {
//     flexDirection: "row",
//     height: "100%",
//     width: '10%',
//     justifyContent: "center",
//     //borderWidth: 5,
//     //borderColor: "black",
//   },
//   tappContainer: {
//     flexDirection: "row",
//     height: "100%",
//     width: '50%',
//     justifyContent: "flex-end",
//    // borderWidth: 5,
//     //borderColor: "yellow",
//   },
//   tappContainer2: {
//     flexDirection: "row",
//     height: "100%",
//     width: '55%',
//     justifyContent: "flex-end",
//     padding: 5,
//     //borderWidth: 5,
//     //borderColor: "yellow",
//   },
//   tappHeaderlogoContainer: {
//     flexDirection: "row",
//     height: "100%",
//     width: '22%',
//     justifyContent: "flex-end",
//     //borderWidth: 5,
//     //borderColor: "black",  
//   },
//   tappText: {
//     textAlign: "left",
//     fontSize: 60,
//     fontWeight: "bold",
//     color: "teal",
//     padding: 15,
//   },
//   contentContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     height: "80%",
//     width: '65%',
//     //borderWidth: 5,
//     //borderColor: "teal",
//   },
//   dateTextContainer: {
//     backgroundColor: "aliceblue",
//     flexDirection: "row",
//     height: "85%",
//     width: '40%',
//     borderWidth: 2,
//     borderColor: "teal",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   dateContainer: {
//     flexDirection: "row",
//     height: "15%",
//     width: '100%',
//     //borderWidth: 5,
//     //borderColor: "black",
//   },
//   qrContainer: {
//     borderWidth: 5,
//     borderColor: "red",
//     height: "50%",
//     width: '80%',
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loginSignUpButton: {
//     backgroundColor: "cadetblue",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "15%",
//     width: '100%',
//     borderWidth: 5,
//     borderColor: "teal",
//   },
//   confirmButton: {
//     backgroundColor: "teal",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "18%",
//     width: '55%',
//     borderWidth: 5,
//     borderColor: "darkslategrey",
//   },
//   paymentButton: {
//     backgroundColor: "cadetblue",
//     borderWidth: 5,
//     borderColor: "teal",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     height: "100%",
//     width: '48%',
//   },
//   addCoinButton: {
//     backgroundColor: "cadetblue",
//     borderWidth: 5,
//     borderColor: "teal",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     height: "100%",
//     width: '48%',
//   },
//   buttonReturn: {
//     backgroundColor: "teal",
//     borderWidth: 5,
//     borderColor: "darkslategrey",
//     height: "15%",
//     width: '80%',
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loginSignUpText: {
//     textAlign: "center",
//     fontSize: 25,
//     fontWeight: "bold",
//     color: "black",
//   },
//   whiteText: {
//     textAlign: "center",
//     fontSize: 25,
//     fontWeight: "bold",
//     color: "white",
//   },
//   dateText: {
//     textAlign: "center",
//     fontSize: 25,
//     fontWeight: "bold",
//     color: "black",
//   },
//   homeText: {
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "black",
//     padding: 10,
//   },
//   spaceLoginSignUp: {
//     height: "15%",
//     width: '100%',
//    // borderWidth: 5,
//     //borderColor: "red",
//     padding: 15,
//   },
//   dateSpace: {
//     flexDirection: "row",
//     height: "100%",
//     width: '60%',
//     justifyContent: "flex-start",
//     //borderWidth: 5,
//     //borderColor: "blue",
//   },
//   spaceHome: {
//     height: "10%",
//     width: '100%',
//     //borderWidth: 5,
//     //borderColor: "red",
//     padding: 5,
//   },
//   spaceApproved: {
//     height: "2%",
//     width: '100%',
//     //borderWidth: 5,
//     //borderColor: "red",
//     padding: 5,
//   },
//   entrySpace: {
//     backgroundColor: "white",
//     height: "15%",
//     width: '100%',
//     //borderWidth: 5,
//     //borderColor: "red",
//     padding: 15,
//   },
//   transactionSpace: {
//     backgroundColor: "white",
//     height: "30%",
//     width: '90%',
//     borderWidth: 2,
//     borderColor: "black",
//     margin: 15,
//   },
//   paymentSpace: {
//     flexDirection: "row",
//     height: "100%",
//     width: '5%',
//     justifyContent: "center",
//     //borderWidth: 5,
//     //borderColor: "blue",
//   },
//   tappLogoContainer: {
//     backgroundColor: "white",
//     borderWidth: 5,
//     borderColor: "teal",
//     height: "40%",
//     width: '100%',
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   tappLogoimage: {
//     height: "100%",
//     width: "100%",
//     resizeMode: "contain",
//   },
//   versionContainer:{
//     flexDirection: "row",
//     height: "100%",
//     width: '50%',
//     justifyContent: "flex-start",
//     //borderWidth: 5,
//     //borderColor: "red",
//     padding: 15,
//   },
//   versionText: {
//     textAlign: "left",
//     fontSize: 17,
//     fontWeight: "bold",
//     color: "aliceblue",
//   },
// });
