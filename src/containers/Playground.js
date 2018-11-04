import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import TimeBar from './../components/TimeBar';
import { Actions } from 'react-native-router-flux';
import { Fonts } from './../utils/Fonts';
import { Constants } from './../utils/Constants';
import { Metrics } from './../config/Metrics';
import { Timings } from './../config/Timings';

export default class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };
  }

  increaseScore = () => {
    this.setState(prevState => ({ score: prevState.score + 1 }));
  }

  render() {
    return (
      <TouchableNativeFeedback style={styles.mainContainer} onPress={this.increaseScore}>
        <View style={styles.container}>
          <Text style={styles.score}>
            <Text style={styles.scoreText}>Score:{"\n"}</Text>
            <Text style={styles.scoreValue}>
              { this.state.score }
            </Text>
          </Text>

          <Text></Text>

          <TimeBar score={this.state.score} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.HORIZONTAL_MARGIN,
    paddingVertical: Metrics.VERTICAL_MARGIN,
  },
  score: {
    textAlign: 'center',
  },
  scoreText: {
    color: Constants.COLOR_BLACK,
    fontSize: 40,
    fontFamily: Fonts.BarrioRegular,
  },
  scoreValue: {
    color: Constants.COLOR_TEXT,
    fontSize: 55,
    fontFamily: Fonts.BarrioRegular,
    textShadowColor: Constants.COLOR_BLACK,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },
});
