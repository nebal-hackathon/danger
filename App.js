import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
  }

  componentWillMount() {
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
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.latitude}</Text>
        <Text>{this.state.longitude}</Text>
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
