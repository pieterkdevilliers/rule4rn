import React, {useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

import colours from '../config/colours';
import Register from '../components/Register';
import CustomButtonPrimary from '../components/CustomButtonPrimary';
import CustomButtonSecondary from '../components/CustomButtonSecondary';
import AuthNavigator from '../navigation/AuthNavigator';

function RegisterScreen(navigation) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
        };

    const handlePasswordChange = (text) => {
        setPassword(text);
        };

        const handleEmailChange = (text) => {
            setEmail(text);
            };
    
        const handlePassword2Change = (text) => {
            setPassword2(text);
            };

    const handleRegister = () => {
        // You can now access the username and password here for further processing.
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Password2:', password2);
        };

    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Register</Text>
            </View>
            <Register 
            onUsernameChange={handleUsernameChange}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onPassword2Change={handlePassword2Change}
            />
            <View>
                <CustomButtonPrimary title="Register" onPress={handleRegister} style={styles.buttonText} />
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
        marginBottom: 20,

    },
    registerButton: {
        width: '90%',
        height: 70,
        backgroundColor: colours.primary,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 150,
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

export default RegisterScreen;