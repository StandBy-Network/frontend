import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Regform from "./app/components/Regform";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Regform />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#29292E',
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcome: {

  },
  instructions: {

  },
});
