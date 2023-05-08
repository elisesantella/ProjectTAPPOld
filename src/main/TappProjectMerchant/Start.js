import React from 'react';
import {ImageBackground, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './StyleSheets/StartStyles.js'; // import the stylesheet
import Header from './Header';
import Footer from './Footer';

function Start({ navigation }) {
    return(
        <View style={styles.container}>
            <Header></Header>
            <View style ={styles.mainBody}>
                <ImageBackground 
                        source={require('./BackgroundImages/background.png')} 
                        resizeMode= "stretch" 
                        style={styles.background}>
                    <View style ={styles.content}>
                        <View style ={styles.loginSignUpButton}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style ={styles.spaceLoginSignUp}/>
                        <View style ={styles.loginSignUpButton}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style ={styles.spaceLoginSignUp}/>
                        <View style ={styles.imageContainer}>
                            <Image
                                style={styles.logoImage}
                                source={require('./Logos/TappLogo.png')} />
                        </View>
                    </View>
                </ImageBackground>
             </View>
            <Footer></Footer>
        </View>
    );
}

export default Start;
