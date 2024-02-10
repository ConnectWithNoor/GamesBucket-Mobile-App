import { StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '@rneui/themed';
import appTheme from '@assets/constants/theme';

const AppCTA = props => {
  const {
    title = '',
    onAction,
    disabled = false,
    customStyle,
    size = 'lg',
    ...rest
  } = props;
  return (
    <Button
      titleStyle={styles.appCtaTitle}
      buttonStyle={[styles.appCta, customStyle]}
      onPress={val => onAction(val)}
      size={size}
      disabled={disabled}
      {...rest}>
      {title}
    </Button>
  );
};

export default AppCTA;

const styles = StyleSheet.create({
  appCta: {
    backgroundColor: appTheme.COLORS.appYellow,
    borderRadius: appTheme.RADIUS['6xl'],
  },

  appCtaTitle: {
    fontFamily: appTheme.FONTS.md,
    fontSize: appTheme.SIZES.lg,
    color: appTheme.COLORS.appPrimary,
  },
});
