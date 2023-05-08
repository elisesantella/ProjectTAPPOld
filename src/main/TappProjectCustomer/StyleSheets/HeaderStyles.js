import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
headerContainer: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "aliceblue",
    borderWidth: 5,
    borderColor: "teal",
},
atuContainer: {
    flexDirection: "column",
    height: "100%",
    width: '40%',
    justifyContent: "center",
},
atuSpace: {
    height: "30%",
    width: '100%',
    justifyContent: "flex-start",
},
atuImageContainer: {
    height: "190%",
    width: '100%',
    justifyContent: "flex-end",
},
atuImage: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
},
spaceHeader: {
    flexDirection: "row",
    height: "100%",
    width: '5%',
    justifyContent: "center",
},
tappContainer: {
    flexDirection: "row",
    height: "100%",
    width: '55%',
    justifyContent: "flex-end",
    alignSelf: "space-between",
},
logoContainer: {
    flexDirection: "column",
    height: "100%",
    width: '30%',
    padding: 5,
},
logoSpace: {
    height: "27%",
    width: '100%',
    justifyContent: "flex-start",
},
logoImageContainer: {
    height: "70%",
    width: '120%',
    justifyContent: "flex-end",
},
    logoImage: {
    alignSelf: "center",
    height: "80%",
    width: "89%",
},
tappTextContainer: {
    flexDirection: "column-reverse",
},
tappText: {
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    color: "midnightblue",
    textShadowColor: "teal",
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 5,
},
});

export default HeaderStyles;