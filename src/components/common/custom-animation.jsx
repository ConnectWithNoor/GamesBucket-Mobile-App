import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import appTheme from '@assets/constants/theme';

const CustomAnimation = props => {
  const { style, data } = props;
  const { title, message, animFile, isLoop = true } = data || {};
  return (
    <View>
      <LottieView
        source={animFile}
        autoPlay
        loop={isLoop}
        style={{ width: '100%', height: '40%', alignSelf: 'center', ...style }}
      />
      <View style={styles.contentContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
};

export default CustomAnimation;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
    flexDirection: 'column',
    gap: 10,
    marginTop: 15,
  },
  title: {
    fontFamily: appTheme.FONTS.md,
    fontSize: appTheme.SIZES.xl,
    color: appTheme.COLORS.white,
    textAlign: 'center',
  },
  message: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.md,
    color: appTheme.COLORS.appGray,
    textAlign: 'center',
  },
});
