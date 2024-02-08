import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import appTheme from '@assets/constants/theme';

const StatsCard = props => {
  const { icon: Icon, title, value } = props;
  return (
    <View style={styles.statsCard}>
      {/* icon */}
      <View style={styles.iconContainer}>{Icon}</View>

      {/* text */}
      <View>
        <Text style={styles.statsTitle}>{title}</Text>
        <Text style={styles.statsValue}>{value}</Text>
      </View>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  statsCard: {
    paddingVertical: appTheme.SIZES.md,
    paddingHorizontal: appTheme.SIZES.lg,
    backgroundColor: appTheme.COLORS.appSecondary,
    borderRadius: appTheme.RADIUS.xxl,
    width: appTheme.SIZES.WIDTH / 2 - 25,
    borderWidth: 1,
    flexDirection: 'row',
    gap: appTheme.SIZES.md,
    alignItems: 'center',
    borderColor: '#333C5F',
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: appTheme.RADIUS['7xl'],
    backgroundColor: appTheme.COLORS.appTransparent,
    borderWidth: 2,
    borderColor: appTheme.COLORS.appYellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statsTitle: {
    color: appTheme.COLORS.appGray,
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.lg,
  },

  statsValue: {
    fontFamily: appTheme.FONTS['extra-bold'],
    fontSize: appTheme.SIZES.xxl,
    color: appTheme.COLORS.white,
    marginTop: 3,
  },
});
