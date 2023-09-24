import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

import colours from '../config/colours';
import Login from '../components/Login';
import CustomButtonSecondary from '../components/CustomButtonSecondary';
import CustomButtonPrimary from '../components/CustomButtonPrimary';
import AuthNavigator from '../navigation/AuthNavigator';

function WelcomeScreen({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
        };

    const handlePasswordChange = (text) => {
        setPassword(text);
        };

    const handleLogin = () => {
        // You can now access the username and password here for further processing.
        console.log('Username:', username);
        console.log('Password:', password);
        };

    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Login</Text>
            </View>
            <Login 
            onUsernameChange={handleUsernameChange}
            onPasswordChange={handlePasswordChange}
             />
            <View>
                <CustomButtonSecondary title="Login" onPress={handleLogin} style={styles.buttonText} />
            </View>
            <Text style={ styles.screenText}>Don't have an account yet?</Text>
            <View style={styles.registerButton}>
            <CustomButtonPrimary title="Register Here" onPress={() => navigation.navigate("Register")} style={styles.buttonText} />
            </View>
            <View>
        </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colours.black,
        justifyContent: "flex-end",
    },

    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 20,
    },
    
    loginButton: {
        width: '90%',
        height: 70,
        backgroundColor: colours.secondary,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 150,

    },
    registerButton: {
        width: '90%',
        height: 70,
        backgroundColor: colours.primary,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    screenLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 20,
        alignSelf: 'center',
    },
    screenText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colours.white,
        padding: 20,
        alignSelf: 'center',
    },
})

export default WelcomeScreen;