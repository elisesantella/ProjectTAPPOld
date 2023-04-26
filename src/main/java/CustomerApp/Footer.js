import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './StyleSheets/FooterStyles.js'; // import the stylesheet

function Footer() {
  return(
    <View style ={styles.footer}>
      <View style ={styles.footerContent}>
        <Text style={styles.versionText}>
          <Text>***Customer Version***</Text>
        </Text>
      </View>
    {/* <View style ={styles.spaceFooter}/> */}
    </View>
  );
}

export default Footer;