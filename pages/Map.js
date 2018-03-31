import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { BlueButton } from '../components/Button';

export default class MapPage extends React.Component {
  state = {
    region: {
      latitude: this.props.data.latitude,
      longitude: this.props.data.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    data: {
      crimeRate: 0,
      carAccident: 0,
      airQuality: 0,
    }
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  render() {
    const style = require('../utils/mapStyle.json')
    return (
      <View style={styles.container}>
        <MapView style={styles.container}
          initialRegion={this.state.region}
          provider={PROVIDER_GOOGLE}
          customMapStyle={style}
          onRegionChange={this.onRegionChange}
        >
        <ImageBackground style={styles.box} source={require('../assets/map_box.png')}>
          <View style={styles.info}>
            <Image source={require('../assets/crime_blue.png')} />
            <Text style={styles.infoName}>범죄율</Text>
            <Text style={styles.infoValue}>{this.state.data.crimeRate} %</Text>
          </View>
          <View style={styles.info}>
            <Image source={require('../assets/car_blue.png')} />
            <Text style={styles.infoName}>교통사고율</Text>
            <Text style={styles.infoValue}>{this.state.data.carAccident} %</Text>
          </View>
          <View style={styles.info}>
            <Image source={require('../assets/dust_blue.png')} />
            <Text style={styles.infoName}>미세먼지 수치</Text>
            <Text style={styles.infoValue}>{this.state.data.airQuality} %</Text>
          </View>
        </ImageBackground>
        <Image source={require('../assets/pin.png')} />
        <View style={styles.dummy} style={{ top: -30 }}/>
        <BlueButton onPress={ () => {this.props.go('Main')} }>
          <Image source={require('../assets/emoji_hand.png')} />
          <Text style={styles.text}> 뒤로가기</Text>
        </BlueButton>
        </MapView>
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
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width : 320,
    height: 220,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    paddingBottom: 30,
    marginTop: 50,
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
  },
  infoName: {
    marginTop: 14,
    color: '#003567',
    fontSize: 14,
  },
  infoValue: {
    marginTop: 6,
    color: '#003567',
    fontSize: 18,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  dummy: {
    flex: 1,
  },
});
