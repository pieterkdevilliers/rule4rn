import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colours from '../config/colours';

function AddAOLScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Add AOL Screen</Text>
            </View>
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
        width: '100%',
        height: 70,
        backgroundColor: colours.primary,
        alignItems: 'center',
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