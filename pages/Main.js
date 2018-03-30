import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';

export default class MainPage extends React.Component {
  state = {
    latitude: null,
    longitude: null,
  }

  componentDidMount() {
    setInterval(() => {
      const pos = navigator.geolocation.getCurrentPosition(pos => {
        this.setState({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
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
