import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

const IS_ANDROID = Platform.OS === 'android';
const DEVICE_HEIGHT = height;
const DEVICE_WIDTH = width;

const HORIZONTAL_MARGIN = 20;
const VERTICAL_MARGIN = 20;

export const Metrics = {
  IS_ANDROID,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  HORIZONTAL_MARGIN,
  VERTICAL_MARGIN,
};
