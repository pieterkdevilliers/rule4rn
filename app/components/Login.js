import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

import colours from '../config/colours';

function Login({ onUsernameChange, onPasswordChange }) {
    return (
      <View>
          <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          icon='account'
          style={styles.textInput}
          placeholder='Username'
          onChangeText={onUsernameChange}
          />
          <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          textContentType='password'
          secureTextEntry={true}
          style={styles.textInput}
          placeholder='Password'
          onChangeText={onPasswordChange}
          />
      </View>
    );
  }

export default Login

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
