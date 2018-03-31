import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { Button } from '../components/Button';
import { getAddress } from '../utils/GoogleMaps';
import { query } from '../utils/BigQuery'

export default class MainPage extends React.Component {
  state = {
    address: null,
    latitude: null,
    longitude: null,
    crimeRate: 0,
    carAccident: 0,
    airQuality: 0,
    deathRate: 0,
  }

  componentDidMount() {
    this.pos = setInterval(() => {
      const pos = navigator.geolocation.getCurrentPosition(async pos => {
        const { latitude, longitude } = pos.coords
        const address = await getAddress({ latitude, longitude })
        if (this.pos) {
          this.setState({ latitude, longitude, address })
        }
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.pos)
    this.pos = null
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={require('../assets/bg.png')}>
          <View style={styles.address}>
            <Image source={require('../assets/pin.png')} />
            <Text style={styles.addressText}>{this.state.address}</Text>
          </View>
          <ImageBackground style={styles.background} source={require('../assets/footer.png')}>
            <View style={styles.infos}>
              <View style={styles.info}>
                <Image source={require('../assets/crime.png')} />
                <Text style={styles.infoName}>범죄율</Text>
                <Text style={styles.infoValue}>{this.state.crimeRate} %</Text>
              </View>
              <View style={styles.info}>
                <Image source={require('../assets/car.png')} />
                <Text style={styles.infoName}>교통사고율</Text>
                <Text style={styles.infoValue}>{this.state.carAccident} %</Text>
              </View>
              <View style={styles.info}>
                <Image source={require('../assets/dust.png')} />
                <Text style={styles.infoName}>미세먼지 수치</Text>
                <Text style={styles.infoValue}>{this.state.airQuality} %</Text>
              </View>
            </View>
            <Image source={require('../assets/line.png')} />
            <ImageBackground style={styles.deathRate} source={require('../assets/pattern.png')}>
              <View style={styles.info}>
                <View style={styles.row}>
                  <Text style={styles.deathText}>사망할 </Text>
                  <Text style={styles.deathTextBold}>확률</Text>
                </View>
                <Text style={styles.deathValue}>{this.state.deathRate} %</Text>
              </View>
            </ImageBackground>
            <Button onPress={ () => {
              if (this.state.longitude && this.state.latitude) {
                this.props.go('Map', this.state)
              }
            } }>
              <Image source={require('../assets/emoji.png')} />
              <Text style={styles.text}> 다른 곳 </Text>
              <Text style={styles.textBold}>가즈아</Text>
            </Button>
          </ImageBackground>
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
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: 250,
  },
  addressText: {
    marginLeft: 20,
    color: 'white',
    fontSize: 18,
  },
  infos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
  },
  infoName: {
    marginTop: 14,
    color: '#bbbbbb',
    fontSize: 14,
  },
  infoValue: {
    marginTop: 6,
    color: 'white',
    color: '#bbbbbb',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deathRate: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    width: 250,
    height: 130,
    marginBottom: 30,
  },
  deathText: {
    color: 'white',
    fontSize: 20,
  },
  deathTextBold: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  deathValue: {
    color: 'white',
    fontSize: 40,
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
