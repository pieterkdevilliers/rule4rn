import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colours from '../config/colours';

function AOLListScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>AOL List Screen</Text>
            </View>
            <View style={styles.aolContainer}>
                <Text style={styles.aolTitle}>Fitness</Text>
                <Text style={styles.aolDescription}>Killing the fat guy.</Text>
            </View>
            <View style={styles.aolContainer}>
                <Text style={styles.aolTitle}>Dev</Text>
                <Text style={styles.aolDescription}>Progress made on personal development projects.</Text>
            </View>
            <View style={styles.aolContainer}>
                <Text style={styles.aolTitle}>preIPO.network</Text>
                <Text style={styles.aolDescription}>Progress on preIPO Product, Team and Leadership.</Text>
            </View>
            <View style={styles.aolContainer}>
                <Text style={styles.aolTitle}>Personal</Text>
                <Text style={styles.aolDescription}>Personal thoughts and journal.</Text>
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
    aolDescription: {
        fontSize: 18,
        color: colours.white,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
    },
    aolTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 10,
    },

    background: {
        flex: 1,
        backgroundColor: colours.white,
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
        color: colours.black,
        padding: 20,
        alignSelf: 'center',
    },
})

export default AOLListScreen;