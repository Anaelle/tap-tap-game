import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Constants } from './../utils/Constants';
import { Metrics } from './../config/Metrics';
import { Timings } from './../config/Timings';

export default class TimeBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingTime: new Animated.Value(Timings.TIME_LIMIT_IN_MS),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.remainingTime,
      {
        duration: Timings.TIME_LIMIT_IN_MS,
        easing: Easing.linear,
        toValue: 0
      }
    ).start(event => {
      if (event.finished) {
        Actions.endGame({ score: this.props.score })
      }
    });
  }

  render() {
    // Animate the TimeBar color
    const timeBarColor = this.state.remainingTime.interpolate({
      inputRange: [5, Timings.TIME_LIMIT_IN_MS],
      outputRange: [Constants.COLOR_TEXT2, Constants.COLOR_TEXT],
    });

    // Animate the TimeBar width
    const timeBarWidth = this.state.remainingTime.interpolate({
      inputRange: [0, Timings.TIME_LIMIT_IN_MS],
      outputRange: [0, (Metrics.DEVICE_WIDTH - (Metrics.HORIZONTAL_MARGIN * 2))],
    });

    return (
      <View style={styles.timeBar}>
        <Animated.View
          style={[
            styles.timeBarContent,
            {
              width: timeBarWidth,
              backgroundColor: timeBarColor
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeBar: {
    height: 8,
    borderColor: Constants.COLOR_BLACK,
    borderWidth: 1,
    backgroundColor: Constants.COLOR_WHITE
  },
  timeBarContent: {
    height: 6,
    backgroundColor: Constants.COLOR_TEXT
  }
});
