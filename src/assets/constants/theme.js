import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  appPrimary: '#020321',
  appSecondary: '#20263D',
  appYellow: '#DFFE00',
  appGreen: '#68686B',
  appLightGreen: '#ACACAC',
  appGray: '#8593A3',

  white: '#FFFFFF',
  black: '#000000',
  gray: '#7c7c7c',
  red: 'FF0000',
  green: '#00FF00',
};

export const SIZES = {
  WIDTH: width,
  HEIGHT: height,
  xs: 10,
  sm: 12,
  md: 14,
  nm: 16,
  lg: 18,
  xl: 20,
  xxl: 22,
  '3xl': 26,
  '4xl': 30,
  '5xl': 34,
  '6xl': 38,
  '7xl': 42,
  '8xl': 46,
};

export const RADIUS = {
  xs: 2,
  sm: 4,
  md: 6,
  rm: 8,
  lg: 10,
  xl: 12,
  xxl: 14,
  '3xl': 16,
  '4xl': 18,
  '5xl': 20,
  '6xl': 22,
  '7xl': 26,
  '8xl': 50,
};

export const FONTS = {
  nm: 'Mulish-Regular',
  bold: 'Mulish-Bold',
  'semi-bold': 'Mulish-SemiBold',
  'extra-bold': 'Mulish-ExtraBold',
  md: 'Mulish-Medium',
  light: 'Mulish-light',
  extraLight: 'Mulish-ExtraLight',
  black: 'Mulish-Black',
};

export const STYLES = {
  // Layout Styles
  container: {
    flex: 1,
    backgroundColor: COLORS.appPrimary,
  },

  //   Button Styles
};

const appTheme = {
  COLORS,
  SIZES,
  RADIUS,
  FONTS,
  STYLES,
};

export default appTheme;