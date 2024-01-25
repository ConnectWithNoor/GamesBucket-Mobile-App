import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Chip } from '@rneui/themed';
import appTheme from '@assets/constants/theme';

const StatusChip = props => {
  const { title = '' } = props;
  return (
    <Chip buttonStyle={styles.container}>
      <View style={[appTheme.STYLES.flexRowCenter, { gap: 4 }]}>
        <View style={styles.indicator}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Chip>
  );
};

export default StatusChip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000066',
    paddingVertical: 5,
  },
  indicator: {
    width: 10,
    height: 10,
    backgroundColor: appTheme.COLORS.appYellow,
    borderRadius: 5,
  },
  title: {
    color: appTheme.COLORS.appYellow,
    fontFamily: appTheme.FONTS.light,
    fontSize: appTheme.SIZES.md,
  },
});
