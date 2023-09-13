import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import colours from '../config/colours';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    height: 70,
    backgroundColor: colours.secondary,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colours.white,
    padding: 20,
},
});

export default CustomButton;
