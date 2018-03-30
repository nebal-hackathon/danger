import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';

export default class SplashPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.setTimeout(() => {
      this.props.go('Main')
    }, 500)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
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
});
