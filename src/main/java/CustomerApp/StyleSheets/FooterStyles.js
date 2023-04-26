import { StyleSheet } from 'react-native';

const FooterStyles = StyleSheet.create({
    footer: {
      flex: 3,
      flexDirection: "column-reverse",
      backgroundColor: "teal",
      //height: "8%",
      //width: '100%',
      //borderWidth: 3,
      //borderColor: "yellow",
    },
    footerContent:{
      flexDirection: "row",
      height: "85%",
      width: '100%',
      justifyContent: "center",
      //borderWidth: 5,
      //borderColor: "red",
      padding: 15,
    },
    spaceFooter: {
      flexDirection: "row",
      height: "100%",
      width: '50%',
      justifyContent: "flex-end",
      //borderWidth: 5,
      //borderColor: "black",
    },
    versionText: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: "aliceblue",
      textDecorationLine: "underline",
      //borderWidth: 2,
      //borderColor: "blue",
      textDecorationStyle: 'double',
    },
  });

  export default FooterStyles;