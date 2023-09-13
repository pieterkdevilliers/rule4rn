import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colours from '../config/colours';
import PrimaryCard from '../components/PrimaryCard';

function AOLListScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>AOL List Screen</Text>
            </View>
            <View style={styles.aolContainer}>
                
            </View>
            <View style={styles.addAOLButton}>
                <Text style={styles.buttonText}>Add New AOL</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    aolContainer: {
        width: '90%',
        backgroundColor: colours.primary,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,

    },

    background: {
        flex: 1,
        backgroundColor: colours.black,
    },

    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 20,
    },

    addAOLButton: {
        width: '80%',
        height: 70,
        backgroundColor: colours.secondary,
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
})

export default AOLListScreen;