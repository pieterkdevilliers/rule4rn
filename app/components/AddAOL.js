import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

import colours from '../config/colours';

function AddAOL({ onAOLTitleChange, onAOLDescriptionChange}) {
    return (
      <View>
          <TextInput
          style={styles.textInput}
          placeholder='AOL Title'
          onChangeText={onAOLTitleChange}
          />
          <TextInput
          style={styles.textAreaInput}
          placeholder='AOL Description'
          onChangeText={onAOLDescriptionChange}
          />
      </View>
    );
  }

export default AddAOL

const styles = StyleSheet.create({
    textInput: {
        width: '90%',
        height: 50,
        backgroundColor: colours.white,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
    },
    textAreaInput: {
        width: '90%',
        height: 150,
        backgroundColor: colours.white,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
    },
})
