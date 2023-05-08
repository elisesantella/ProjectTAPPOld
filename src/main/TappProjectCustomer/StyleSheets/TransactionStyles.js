import { StyleSheet } from 'react-native';

const TransactionStyles = StyleSheet.create({
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
  padding: 15,
},
space2: {
  height: "2%",
  width: '100%',
},
buttonContainer: {
  flexDirection: "row",
  height: "20%",
  width: '80%',
},
buttonBox: {
  backgroundColor: "aliceblue",
  justifyContent: "center",
  alignItems: "center",
  height: "50%",
  width: '30%',
  borderWidth: 5,
  borderColor: "teal",
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
},
paymentButton: {
  padding: 5,
  backgroundColor: "cadetblue",
  borderWidth: 5,
  borderColor: "teal",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "10%",
  width: '48%',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
},
});

export default TransactionStyles;