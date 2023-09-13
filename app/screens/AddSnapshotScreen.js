import React, {useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

import colours from '../config/colours';
import AddSnapshot from '../components/AddSnapshot';

function AddSnapshotScreen() {

    const [snapshottext, setSnapshotText] = useState('');

    const handleSnapshotTextChange = (text) => {
        setSnapshotText(text);
        };

    const handleAddSnapshot = () => {
        console.log('Snapshot Text:', snapshottext);
        };

    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Add Snapshot Screen</Text>
            </View>
            <AddSnapshot
            onSnapshotTextChange={handleSnapshotTextChange}
            />
            <View style={styles.addSnapshotButton}>
                <Button title="Add Snapshot" onPress={handleAddSnapshot} style={styles.buttonText} />
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
        width: '90%',
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

export default AddSnapshotScreen;