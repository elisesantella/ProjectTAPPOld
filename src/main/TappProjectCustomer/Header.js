import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './StyleSheets/HeaderStyles.js'; // import the stylesheet

function Header() {
    return(
        <View style ={styles.headerContainer}>
            <View style ={styles.atuContainer}>
                <View style ={styles.atuSpace}/>
                <View style ={styles.atuImageContainer}>
                    <Image 
                        style={styles.atuImage}
                        source={require('./Logos/ATU_Logo.png')} />
                </View>
            </View>
            <View style ={styles.spaceHeader}/>
            <View style ={styles.tappContainer}>
                <View style ={styles.logoContainer}>
                    <View style ={styles.logoSpace}/>
                        <View style ={styles.logoImageContainer}>
                            <Image 
                                style={styles.logoImage}
                                source={require('./Logos/TappLogo2.png')} />
                        </View>
                </View>
                <View style ={styles.tappTextContainer}>
                    <Text style={styles.tappText}>
                        <Text>TAPP</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Header;