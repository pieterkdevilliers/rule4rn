import React, {useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

import colours from '../config/colours';
import AddAOL from '../components/AddAOL';
import CustomButtonPrimary from '../components/CustomButtonPrimary';

function AddAOLScreen() {

    const [aoltitle, setAOLTitle] = useState('');
    const [aoldescription, setAOLDescription] = useState('');

    const handleAOLTitleChange = (text) => {
        setAOLTitle(text);
        };

    const handleAOLDescriptionChange = (text) => {
        setAOLDescription(text);
        };

    const handleAddAOL = () => {
        console.log('AOL Title:', aoltitle);
        console.log('AOL Description:', aoldescription);
        };

    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Add AOL Screen</Text>
            </View>
            <AddAOL
            onAOLTitleChange={handleAOLTitleChange}
            onAOLDescriptionChange={handleAOLDescriptionChange}
            />
            <View>
                <CustomButtonPrimary title="Add AOL" onPress={handleAddAOL} style={styles.buttonText} />
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