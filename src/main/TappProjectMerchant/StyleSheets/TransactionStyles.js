import { StyleSheet } from 'react-native';

const TransactionStyles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
},
mainBody: {
    flexDirection: "column",
    backgroundColor: "powderblue",
    height: "75%",
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
    height: "80%",
    width: '80%',
    justifyContent: "center",
    alignItems: "center",
},
qrContainer: {
    height: "50%",
    width: '80%',
    justifyContent: "center",
    alignItems: "center",
},
space1: {
  height: "15%",
  width: '100%',
  padding: 5,
},
amountBox: {
  backgroundColor: "cadetblue",
  justifyContent: "center",
  alignItems: "center",
  height: "18%",
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
  fontSize: 30,
  fontWeight: "bold",
  color: "midnightblue",
  padding: 15,
},
space2: {
  height: "5%",
  width: '100%',
  padding: 15,
},
buttonContainer: {
  flexDirection: "row",
  height: "20%",
  width: '100%',
},
buttonBox: {
  backgroundColor: "aliceblue",
  justifyContent: "center",
  alignItems: "center",
  height: "60%",
  width: '40%',
  borderWidth: 5,
  borderColor: "teal",
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
},
space3: {
  height: "10%",
  width: '20%',
},
textConfirm: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "midnightblue",
},
});

export default TransactionStyles;
  