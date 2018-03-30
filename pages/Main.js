import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';
import { getAddress } from '../utils/GoogleMaps';

export default class MainPage extends React.Component {
  state = {
    address: null,
    latitude: null,
    longitude: null,
  }

  componentDidMount() {
    setInterval(() => {
      const pos = navigator.geolocation.getCurrentPosition(async pos => {
        const { latitude, longitude } = pos.coords
        const address = await getAddress({ latitude, longitude })
        this.setState({ latitude, longitude, address })
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
