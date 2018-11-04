import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Fonts } from './../utils/Fonts';
import { Constants } from './../utils/Constants';
import { Metrics } from './../config/Metrics';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isTapMultiple = this.props.score > 1;
    const timesText = isTapMultiple ? 'times' : 'time';

    return (
      <View style={styles.container}>
        <View />

        <View style={styles.score}>
          <Text style={[styles.scoreText, styles.size1]}>
            You've
          </Text>
           <Text style={[styles.scoreText, styles.size2]}>
            tapped 
          </Text>
          <Text style={styles.scoreValue}>
            { this.props.score }
          </Text>
          <Text style={[styles.scoreText, (isTapMultiple ? styles.size4 : styles.size3)]}>
            { timesText }! 
          </Text>
        </View>

        <View style={styles.home}>
          <TouchableOpacity
              style={styles.homeButton}
              activeOpacity={0.7}
              onPress={() => Actions.home()}
          >
            <Text style={styles.homeButtonText}>Back to home</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  score: {
    textAlign: 'center',
  },
  scoreText: {
    textAlign: 'center',
    color: Constants.COLOR_WHITE,
    fontFamily: Fonts.BarrioRegular,
    textShadowColor: Constants.COLOR_BLACK,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },
  scoreValue: {
    textAlign: 'center',
    color: Constants.COLOR_TEXT,
    fontSize: 55,
    fontFamily: Fonts.BarrioRegular,
    textShadowColor: Constants.COLOR_BLACK,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },
  size1: {
    fontSize: 46,
  },
  size2: {
    fontSize: 40,
  },
  size3: {
    fontSize: 58,
  },
  size4: {
    fontSize: 48,
  },
  home: {},
  homeButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Constants.COLOR_BLACK,
    borderColor: Constants.COLOR_BLACK,
    borderRadius: 5,
    borderWidth: 1,
  },
  homeButtonText: {
    color: Constants.COLOR_TEXT,
    fontSize: 25,
    fontFamily: Fonts.NanumGothicCodingRegular,
  },
});
