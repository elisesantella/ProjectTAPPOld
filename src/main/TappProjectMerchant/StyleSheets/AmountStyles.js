import { StyleSheet } from 'react-native';

const AmountStyles = StyleSheet.create({
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
homeContainer: {
  flexDirection: "row",
  height: "10%",
  width: '100%',
},
returnButton: {
  flexDirection: "row",
  height: "100%",
  width: '30%',
  justifyContent: "center",
  alignItems: "center",
},
smallSpace: {
  height: "10%",
  width: '100%',
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
  fontSize: 25,
  fontWeight: "bold",
  color: "midnightblue",
},
space: {
  height: "15%",
  width: '100%',
  padding: 15,
},
input: {
  height: 50,
  margin: 12,
  borderWidth: 5,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: 10,
  borderColor: "teal",
  backgroundColor: "white",
  textAlign: "center",
  fontSize: 20,
  fontWeight: "bold",
  color: "midnightblue",
},
buttonOk: {
  backgroundColor: "teal",
  borderWidth: 5,
  borderColor: "darkslategrey",
  height: "15%",
  width: '40%',
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
textOk: {
  textAlign: "center",
  fontSize: 25,
  fontWeight: "bold",
  color: "white",
},
});

export default AmountStyles;