import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  appPrimary: '#020321',
  appSecondary: '#20263D',
  appYellow: '#DFFE00',
  appGreen: '#68686B',
  appLightGreen: '#ACACAC',
  appGray: '#8593A3',
  appLightGray: '#B1B1B1',
  appTransparent: '#FFFFFF00',

  white: '#FFFFFF',
  black: '#000000',
  gray: '#7c7c7c',
  red: '#FF0000',
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
  '7xl': 25,
  '8xl': 32,
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
    color: COLORS.white,
  },

  // typography styles
  headerTitle: {
    fontSize: SIZES.xxl,
    fontFamily: FONTS.nm,
    color: COLORS.white,
  },

  // Grid/flex styles
  flexRowStart: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  flexColStart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  flexColBetween: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexRowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // spacing
  marginVerticalSm: {
    marginVertical: 14,
  },

  // formStyles

  formLabel: {
    fontFamily: FONTS.nm,
    fontSize: SIZES.md,
    color: COLORS.appLightGray,
    marginBottom: 7,
  },

  // bottom sheet

  bottomSheetBackdropStyle: {
    backgroundColor: COLORS.black,
    opacity: 0.4,
  },

  bottomSheetContainer: {
    backgroundColor: COLORS.appSecondary,
    maxHeight: SIZES.HEIGHT * 0.8,
    marginTop: 'auto',
    borderRadius: RADIUS['3xl'],
    marginHorizontal: 10,
    alignItems: 'flex-start',
    padding: 20,
  },

  bottomSheetHeader: {
    paddingBottom: SIZES.lg,
    width: '100%',
  },

  bottomSheetTitle: {
    color: COLORS.white,
    fontSize: SIZES.lg,
  },

  // global styles
  offerPrice: {
    fontFamily: FONTS.nm,
    fontSize: SIZES.md,
    color: COLORS.appLightGray,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
};

const appTheme = {
  COLORS,
  SIZES,
  RADIUS,
  FONTS,
  STYLES,
};

export default appTheme;
