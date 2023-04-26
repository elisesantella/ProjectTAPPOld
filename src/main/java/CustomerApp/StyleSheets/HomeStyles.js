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
      //borderWidth: 5,
      //borderColor: "teal",
    },
    dateTextContainer: {
      // backgroundColor: "aliceblue",
      flexDirection: "row",
      height: "100%",
      width: '55%',
      // borderWidth: 2,
      // borderColor: "teal",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    dateContainer: {
      flexDirection: "row",
      height: "12%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "black",
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
    addCoinButton: {
      backgroundColor: "cadetblue",
      borderWidth: 5,
      borderColor: "teal",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100%",
      width: '48%',
    },
    loginSignUpText: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "midnightblue",
    },
    dateText: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "midnightblue",
    },
    text5: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
      color: "midnightblue",
      //borderWidth: 5,
      //borderColor: "yellow",
    },
    homeText: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "midnightblue",
      padding: 10,
    },
    dateSpace: {
      flexDirection: "row",
      height: "100%",
      width: '50%',
      justifyContent: "flex-start",
      //borderWidth: 5,
      //borderColor: "blue",
    },
    spaceHome: {
      height: "10%",
      width: '100%',
      //borderWidth: 5,
      //borderColor: "red",
      padding: 5,
    },
    entrySpace: {
      backgroundColor: "white",
      height: "15%",
      width: '100%',
      borderWidth: 3,
      borderColor: "teal",
      padding: 15,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    transactionSpace: {
      backgroundColor: "white",
      height: "45%",
      width: '100%',
      borderWidth: 2,
      borderColor: "black",
      margin: 15,
    },
    paymentSpace: {
      flexDirection: "row",
      height: "100%",
      width: '5%',
      justifyContent: "center",
      //borderWidth: 5,
      //borderColor: "blue",
    },
  });

  export default HomeStyles;