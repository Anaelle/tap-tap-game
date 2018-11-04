import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Fonts } from './../utils/Fonts';
import { Constants } from './../utils/Constants';
import { Metrics } from './../config/Metrics';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View />

        <View style={styles.rules}>
          <Text style={styles.rulesText}>
            <Text style={styles.rulesTextOtherColor}>Tap</Text> as fast as you can!
          </Text>
        </View>

        <View style={styles.play}>
          <TouchableOpacity
              style={styles.playButton}
              activeOpacity={0.7}
              onPress={() => Actions.playground()}
          >
            <Text style={styles.playButtonText}>Start game</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.HORIZONTAL_MARGIN,
    paddingVertical: Metrics.VERTICAL_MARGIN,
  },
  rules: {},
  rulesText: {
    textAlign: 'center',
    color: Constants.COLOR_BLACK,
    fontSize: 55,
    fontFamily: Fonts.BarrioRegular,
  },
  rulesTextOtherColor: {
    textShadowColor: Constants.COLOR_BLACK,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    color: Constants.COLOR_TEXT,
  },
  play: {},
  playButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Constants.COLOR_BLACK,
    borderColor: Constants.COLOR_BLACK,
    borderRadius: 5,
    borderWidth: 1,
  },
  playButtonText: {
    color: Constants.COLOR_TEXT,
    fontSize: 25,
    fontFamily: Fonts.NanumGothicCodingRegular,
  },
});
