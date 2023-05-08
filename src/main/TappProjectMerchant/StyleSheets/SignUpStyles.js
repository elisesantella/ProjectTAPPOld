import { StyleSheet } from 'react-native';

const SignUpStyles = StyleSheet.create({
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
contents: {
  height: "80%",
  width: '80%',
  justifyContent: "center",
  alignItems: "center",
},
returnContainer: {
  flexDirection: "row",
  height: "10%",
  width: '100%',
},
returnButton: {
  height: "100%",
  width: '30%',
  justifyContent: "center",
  alignItems: "center",
},
smallSpace: {
  height: "2%",
  width: '100%',
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
blueText: {
  textAlign: "center",
  fontSize: 25,
  fontWeight: "bold",
  color: "midnightblue",
},
input: {
  height: 50,
  width: 200,
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
buttonConfirm: {
  backgroundColor: "teal",
  borderWidth: 5,
  borderColor: "darkslategrey",
  height: "15%",
  width: '50%',
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
},
whiteText: {
  textAlign: "center",
  fontSize: 25,
  fontWeight: "bold",
  color: "white",
},
signUpContainer: {
  flexDirection: "row",
  height: "10%",
  width: '65%',
},
smallText: {
  textAlign: "center",
  fontSize: 12,
  fontWeight: "bold",
  color: "midnightblue",
},
underlineText: {
  textAlign: "center",
  fontSize: 12,
  fontWeight: "bold",
  color: "midnightblue",
  textDecorationLine: "underline",
  textDecorationStyle: 'double',
},
});

export default SignUpStyles;