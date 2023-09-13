import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import colours from '../config/colours';

function SecondaryCard({title, subtitle}) {
  return (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colours.secondary,
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 10,
    },
    cardSubtitle: {
        fontSize: 18,
        color: colours.white,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
    },
    
})

export default SecondaryCard;
