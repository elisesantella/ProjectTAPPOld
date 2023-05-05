import { StyleSheet } from 'react-native';

const FooterStyles = StyleSheet.create({
footer: {
  flex: 3,
  flexDirection: "column-reverse",
  backgroundColor: "teal",
},
footerContent:{
  flexDirection: "row",
  height: "85%",
  width: '100%',
  justifyContent: "center",
  padding: 15,
},
spaceFooter: {
  flexDirection: "row",
  height: "100%",
  width: '50%',
  justifyContent: "flex-end",
},
versionText: {
  textAlign: "center",
  fontSize: 18,
  fontWeight: "bold",
  color: "aliceblue",
  textDecorationLine: "underline",
  textDecorationStyle: 'double',
},
});

export default FooterStyles;