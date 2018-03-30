import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SplashPage from './pages/Splash'
import MainPage from './pages/Main'
import MapPage from './pages/Map'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { page: 'Splash' }
  }
  go(page) {
    this.setState({ page })
  }
  render() {
    if (this.state.page === 'Splash') {
      return (<SplashPage go={ (page) => this.go(page) }/>)
    } else if (this.state.page == 'Main') {
      return (<MainPage />)
    } else if (this.state.page == 'Map') {
      return (<MapPage />)
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
