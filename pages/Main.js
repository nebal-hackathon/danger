import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';
import { lookupAddress } from '../utils/geo';

export default class MainPage extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    address: null,
  }

  componentDidMount() {
    setInterval(() => {
      const pos = navigator.geolocation.getCurrentPosition(async (pos) => {
        this.setState({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        })
        this.setState({
          address: await lookupAddress(pos.coords.longitude, pos.coords.latitude)
        })
      })
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Text>{this.state.latitude}</Text>
        <Text>{this.state.longitude}</Text>
        <Text>{this.state.address}</Text>
        <Button onPress={ () => {this.props.go('Map')} }>
          다른곳을 가보자
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
