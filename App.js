import React, { Component } from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import Routes from './src/components/Routes';
import backgroundImage from './src/images/background.jpg';

export default class App extends Component {
  render() {
    return (
      <View style={styles.globalContainer}>
        <StatusBar hidden={true} />
        
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
          <Routes />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
