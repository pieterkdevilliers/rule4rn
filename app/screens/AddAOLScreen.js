import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colours from '../config/colours';
import AddAOL from '../components/AddAOL';

function AddAOLScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Add AOL Screen</Text>
            </View>
            <AddAOL />
            <View style={styles.addAOLButton}>
                <Text style={styles.buttonText}>Add AOL</Text>
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
    addAOLButton: {
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
})

export default AddAOLScreen;