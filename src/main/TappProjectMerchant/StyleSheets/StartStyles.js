import { StyleSheet } from 'react-native';

const StartStyles = StyleSheet.create({
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
    width: '60%',
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
buttonText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "midnightblue",
},
spaceLoginSignUp: {
    height: "15%",
    width: '100%',
    padding: 15,
},
imageContainer: {
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "teal",
    height: "40%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
},
logoimage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
},
});

export default StartStyles;