import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { BlueButton } from '../components/Button';

export default class MapPage extends React.Component {
  state = {
    crimeRate: 0,
    carAccident: 0,
    airQuality: 0,
    deathRate: 0,
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.box} source={require('../assets/map_box.png')}>
          <View style={styles.info}>
            <Image source={require('../assets/crime_blue.png')} />
            <Text style={styles.infoName}>범죄율</Text>
            <Text style={styles.infoValue}>{this.state.crimeRate} %</Text>
          </View>
          <View style={styles.info}>
            <Image source={require('../assets/car_blue.png')} />
            <Text style={styles.infoName}>교통사고율</Text>
            <Text style={styles.infoValue}>{this.state.carAccident} %</Text>
          </View>
          <View style={styles.info}>
            <Image source={require('../assets/dust_blue.png')} />
            <Text style={styles.infoName}>미세먼지 수치</Text>
            <Text style={styles.infoValue}>{this.state.airQuality} %</Text>
          </View>
        </ImageBackground>
        <View style={styles.dummy} />
        <BlueButton onPress={ () => {this.props.go('Map')} }>
          <Image source={require('../assets/emoji_hand.png')} />
          <Text style={styles.text}> 뒤로가기</Text>
        </BlueButton>
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
