import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "white",
  flexDirection: "column",
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
  height: "80%",
  width: '65%',
},
dateContainer: {
  flexDirection: "row",
  height: "12%",
  width: '100%',
},
logoutButton: {
  backgroundColor: "cadetblue",
  height: "100%",
  width: '40%',
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  borderWidth: 2,
  borderColor: "aliceblue",
},
bigText: {
  textAlign: "center",
  fontSize: 25,
  fontWeight: "bold",
  color: "midnightblue",
},
dateSpace: {
  flexDirection: "row",
  height: "100%",
  width: '20%',
  justifyContent: "flex-start",
},
dateTextContainer: {
  flexDirection: "row",
  height: "100%",
  width: '55%',
  justifyContent: "center",
  alignItems: "center",
},
space: {
  height: "1%",
  width: '100%',
  padding: 5,
},
loginSignUpButton: {
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
balanceSpace: {
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  height: "12%",
  width: '70%',
  borderWidth: 3,
  borderColor: "teal",
  padding: 15,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
},
smallText: {
  textAlign: "center",
  fontSize: 15,
  fontWeight: "bold",
  color: "midnightblue",
},
transactionSpace: {
  backgroundColor: "white",
  height: "45%",
  width: '100%',
  borderWidth: 2,
  borderColor: "black",
  margin: 15,
},
paymentButton: {
  backgroundColor: "cadetblue",
  borderWidth: 5,
  borderColor: "teal",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100%",
  width: '48%',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
},
buttonText: {
  textAlign: "center",
  fontSize: 15,
  fontWeight: "bold",
  color: "midnightblue",
  padding: 10,
},
buttonSpace: {
  flexDirection: "row",
  height: "100%",
  width: '5%',
  justifyContent: "center",
},
});

export default HomeStyles;