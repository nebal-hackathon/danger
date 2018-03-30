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
      {props.children}
    </TouchableOpacity>
  )
}

export const BlueButton = (props: {children: Chileren, onPress: Function}) => {
  return (
    <TouchableOpacity
      style={ styles.blue }
      onPress={ props.onPress }>
      {props.children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    height: 60,
    width: 200,
    padding: 20
  },
  blue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#055E9170',
    borderWidth: 1,
    borderColor: '#458EB7',
    borderRadius: 30,
    height: 60,
    width: 160,
    padding: 20
  },
});
