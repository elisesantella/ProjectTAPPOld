import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
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
dateContainer: {
  flexDirection: "row",
  height: "10%",
  width: '100%',
},
logoutButton: {
  backgroundColor: "cadetblue",
  height: "100%",
  width: '35%',
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  borderWidth: 2,
  borderColor: "aliceblue",
},
spaceDate: {
  flexDirection: "row",
  height: "100%",
  width: '20%',
  justifyContent: "flex-start",
},
date: {
  flexDirection: "row",
  height: "100%",
  width: '50%',
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
},
bigText: {
  textAlign: "center",
  fontSize: 25,
  fontWeight: "bold",
  color: "midnightblue",
},
space: {
  height: "2%",
  width: '100%',
  padding: 5,
},
balanceBox: {
  backgroundColor: "cadetblue",
  justifyContent: "center",
  alignItems: "center",
  height: "15%",
  width: '75%',
  borderWidth: 5,
  borderColor: "teal",
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
},
balanceDisplay: {
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
balanceText: {
  textAlign: "center",
  fontSize: 20,
  fontWeight: "bold",
  color: "midnightblue",
},
recentTransBox: {
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
transactionDisplay: {
  backgroundColor: "white",
  height: "45%",
  width: '90%',
  borderWidth: 2,
  borderColor: "teal",
  padding: 15,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
},
transactionText: {
  textAlign: "center",
  fontSize: 16,
  fontWeight: "bold",
  color: "midnightblue",
},
makeSaleButton: {
  backgroundColor: "cadetblue",
  borderWidth: 5,
  borderColor: "teal",
  height: "15%",
  width: '50%',
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
});

export default HomeStyles;