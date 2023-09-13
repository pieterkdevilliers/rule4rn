import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colours from '../config/colours';

function AddSnapshotScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Add Snapshot Screen</Text>
            </View>
            <View style={styles.addSnapshotButton}>
                <Text style={styles.buttonText}>Add Snapshot</Text>
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
    addSnapshotButton: {
        width: '100%',
        height: 70,
        backgroundColor: colours.secondary,
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

export default AddSnapshotScreen;