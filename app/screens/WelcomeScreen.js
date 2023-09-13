import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colours from '../config/colours';

function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Welcome Screen</Text>
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.buttonText}>Register</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colours.white,
        justifyContent: "flex-end",
    },

    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 20,
    },
    
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colours.secondary,
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colours.primary,
        alignItems: 'center',
    },
    screenLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.black,
        padding: 20,
        alignSelf: 'center',
    },
})

export default WelcomeScreen;