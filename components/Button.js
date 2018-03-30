import React, { Component, Chileren } from 'react'
import {
  PixelRatio,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';

export const Button = (props: {children: Chileren, onPress: Function}) => {
  return (
    <TouchableOpacity
      style={ styles.button }
      onPress={ props.onPress }>
      <Text style={ styles.text }>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aFF',
    borderRadius: 10,
    padding: 20
  },
  text: {
    color: 'white',
  }
});
