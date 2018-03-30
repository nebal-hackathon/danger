import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';

export default class SplashPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.setTimeout(() => {
      this.props.go('Main')
    }, 50)
  }
  render() {
    return (
      <View style={styles.container}>
		<ImageBackground style={styles.background} source={require('../assets/bg.png')}>
        <Text>Splash</Text>
		</ImageBackground>
      </View>
    );
  }
}

reactMixin.onClass(SplashPage, TimerMixin)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	background:{
		flex: 1,
		alignItems : 'center',
		justifyContent: 'center',
		width : '100%',
		paddingTop: 30,
	},
});
