import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SplashPage from './pages/Splash'
import MainPage from './pages/Main'
import MapPage from './pages/Map'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { page: 'Splash', data: null }
  }
  go(page, data) {
    this.setState({ page, data })
  }
  render() {
    if (this.state.page === 'Splash') {
      return (<SplashPage data={this.state.data} go={ (page, data) => this.go(page, data) } />)
    } else if (this.state.page == 'Main') {
      return (<MainPage data={this.state.data} go={ (page, data) => this.go(page, data) } />)
    } else if (this.state.page == 'Map') {
      return (<MapPage data={this.state.data} go={ (page, data) => this.go(page, data) } />)
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
