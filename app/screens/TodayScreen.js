import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colours from '../config/colours';
import SecondaryCard from '../components/SecondaryCard';
import CustomButtonPrimary from '../components/CustomButtonPrimary';
import AOLNavigator from '../navigation/AOLNavigator';
import SnapshotNavigator from '../navigation/SnapshotNavigator';
import routes from '../navigation/routes';


function TodayScreen({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={ styles.screenLabel}>Today Screen</Text>
                <Text style={ styles.screenLabel}>Selected AOL Title</Text>
            </View>
            <SecondaryCard title="Snapshot 1"/>
            <SecondaryCard title="Snapshot 2"/>
            <SecondaryCard title="Snapshot 3"/>
            <View style={styles.addSnapshotButton}>
            <CustomButtonPrimary title="Add New Snapshot" onPress={() => navigation.navigate(routes.ADD_SNAPSHOT)} style={styles.buttonText} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    snapshotContainer: {
        width: '90%',
        backgroundColor: colours.secondary,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,

    },
    snapshotDetail: {
        fontSize: 18,
        color: colours.white,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
    },
    snapshotDate: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 10,
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

    addSnapshotButton: {
        width: '80%',
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

export default TodayScreen;