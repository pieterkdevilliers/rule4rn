import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

import colours from '../config/colours';

function AddSnapshot({onSnapshotTextChange}) {
    return (
      <View>
          <TextInput
          style={styles.textAreaInput}
          placeholder='Snapshot Description'
          onChangeText={onSnapshotTextChange}/>
      </View>
    );
  }

export default AddSnapshot

const styles = StyleSheet.create({
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
