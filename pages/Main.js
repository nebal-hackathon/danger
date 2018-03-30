import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

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
        <ImageBackground style={styles.background} source={require('../assets/bg.png')}>
          <View>
          </View>
          <Text>Main</Text>
          <Text>{this.state.latitude}</Text>
          <Text>{this.state.longitude}</Text>
          <Text>{this.state.address}</Text>
          <Button onPress={ () => {this.props.go('Map')} }>
            <Image source={require('../assets/emoji.png')} />
            <Text style={styles.text}> 다른 곳 </Text>
            <Text style={styles.textBold}>가즈아</Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    paddingTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  textBold: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
