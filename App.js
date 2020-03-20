import React from 'react';
import {StyleSheet, View} from 'react-native';
import Regform from "./app/screens/Regform";


export default function App() {

    return (
      <View style={styles.container}>
        <Regform />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#29292E',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
