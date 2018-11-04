import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './../containers/Home';
import Playground from './../containers/Playground';
import EndGame from './../containers/EndGame';

export default class Routes extends Component {
  render() {
    return (
      <Router sceneStyle={styles.router}>
        <Scene key='root' hideNavBar={true}>
          <Scene
            key='home'
            component={Home}
            initial={true}
          />

          <Scene
            key='playground'
            component={Playground}
          />

          <Scene
            key='endGame'
            component={EndGame}
          />
        </Scene >
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  router: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
