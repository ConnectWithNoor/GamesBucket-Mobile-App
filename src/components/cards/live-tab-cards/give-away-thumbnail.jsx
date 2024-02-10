import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import StatusChip from '@components/tabs/status-chip';
import DynamicIcon from '@components/common/dynamic-icon';
import FastImage from 'react-native-fast-image';
import appTheme from '@assets/constants/theme';
import { Image } from '@rneui/themed';
import { epicGamesImage } from '@assets/constants/images';

const GiveAwayThumbnail = props => {
  const { data } = props;
  const supportedPlatforms = useCallback(platform => {
    return (
      <Image
        source={epicGamesImage}
        style={styles.giveawayCardbgImageIcon}
        resizeMode="cover"
      />
    );
  }, []);

  return (
    <FastImage
      source={{
        uri: data?.thumbnail,
        headers: { Authorization: 'someAuthToken' },
        priority: FastImage.priority.normal,
      }}
      style={styles.giveAwayCardImage}
      resizeMode={FastImage.resizeMode.cover}>
      <View style={styles.bgOverlay} />
      <View
        style={[appTheme.STYLES.flexColBetween, { height: 200, padding: 15 }]}>
        <View style={appTheme.STYLES.flexRowBetween}>
          <StatusChip title={data?.status || 'Not available'} />
          <View style={[appTheme.STYLES.flexRowStart, { gap: 4 }]}>
            {supportedPlatforms(data.platforms)}
          </View>
        </View>
        <View
          style={[
            appTheme.STYLES.flexRowStart,
            styles.giveAwayCardBgBottomContainer,
          ]}>
          <DynamicIcon name="Profile2User" variant="Bold" color="#fff" />
          <Text style={styles.giveAwayCardBgBottomText} numberOfLines={1}>
            {data?.users}+ users collected the loot
          </Text>
        </View>
      </View>
    </FastImage>
  );
};

export default React.memo(GiveAwayThumbnail);

const styles = StyleSheet.create({
  giveawayCardbgImageIcon: {
    width: 30,
    height: 30,
    backgroundColor: `rgba(255, 255, 255, 0.1)`,
    borderRadius: appTheme.RADIUS.md,
  },

  giveAwayCardImage: {
    position: 'relative',
    width: appTheme.SIZES.WIDTH - 40,
    height: 200,
    borderRadius: appTheme.RADIUS['3xl'],
    overflow: 'hidden',
  },
  bgOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(160, 160, 160, 0.1)',
    width: '100%',
    height: '100%',
  },
  giveAwayCardBgBottomContainer: {
    gap: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(160, 160, 160, 0.3)',
    padding: 5,
    borderRadius: appTheme.RADIUS['lg'],
  },
  giveAwayCardBgBottomText: {
    color: appTheme.COLORS.white,
    fontSize: appTheme.SIZES.md,
    fontFamily: appTheme.FONTS.nm,
  },
});
