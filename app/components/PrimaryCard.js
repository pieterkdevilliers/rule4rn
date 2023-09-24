import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colours from '../config/colours';

function PrimaryCard({title, subtitle, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colours.primary,
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

export default PrimaryCard;
