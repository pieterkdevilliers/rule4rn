import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

import colours from '../config/colours';
import Login from '../components/Login';
import CustomButtonSecondary from '../components/CustomButtonSecondary';
import CustomButtonPrimary from '../components/CustomButtonPrimary';
import AuthNavigator from '../navigation/AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AOLNavigator from '../navigation/AOLNavigator';

function WelcomeScreen({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user_id, setUserId] = useState(null);

    const handleUsernameChange = (text) => {
        setUsername(text);
        };

    const handlePasswordChange = (text) => {
        setPassword(text);
        };

        const handleLogin = async () => {
            try {
              const response = await fetch('https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/app-login/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
              });

              const data = await response.json();
              console.log('Response Data on Login:', data);
          
              if (response.ok) {
                // Authentication successful
                // Redirect to the main app screen or perform any necessary actions
                setUserId(data.user_id); // Store the user_id in state
                console.log('Login successful');
                const user_id = data.user_id;
                console.log('User ID:', user_id);
                navigation.navigate('Areas Of Life', { user_id: user_id });
              } else {
                // Authentication failed
                // Handle the error and display a message to the user
                console.error('Login failed');
              }
            } catch (error) {
              // Handle network error or other exceptions
              console.error('Login error:', error);
            }
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