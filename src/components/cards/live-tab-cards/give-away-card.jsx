import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, memo } from 'react';

import { Card, Chip, Image } from '@rneui/themed';
import { epicGamesImage } from '@assets/constants/images';
import AppCTA from '@components/buttons/app-cta';
import StatusChip from '@components/tabs/status-chip';
import appTheme from '@assets/constants/theme';
import DynamicIcon from '@components/common/dynamic-icon';
import { APP_THEME } from '@assets/constants';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

const GiveAwayCard = props => {
  const { data, onAction } = props;

  const supportedPlatforms = useCallback(platform => {
    return (
      <Image
        source={epicGamesImage}
        style={styles.giveawayCardbgImageIcon}
        resizeMode="cover"
      />
    );
  }, []);
  console.log('render card');

  return (
    <View>
      <Card containerStyle={styles.cardContainerStyles}>
        {/* Bg Image */}
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
            style={[
              appTheme.STYLES.flexColBetween,
              { height: 200, padding: 15 },
            ]}>
            <View style={appTheme.STYLES.flexRowBetween}>
              <StatusChip title={data?.status || 'Not available'} />
              <View style={[APP_THEME.flexRowStart, { gap: 4 }]}>
                {supportedPlatforms(data.platforms)}
              </View>
            </View>
            <View
              style={[
                appTheme.STYLES.flexRowStart,
                styles.giveAwayCardBgBottomContainer,
              ]}>
              <View style={styles.overlayView} />
              <DynamicIcon name="Profile2User" variant="Bold" color="#fff" />
              <Text style={styles.giveAwayCardBgBottomText} numberOfLines={1}>
                {data?.users}+ users collected the loot
              </Text>
            </View>
          </View>
        </FastImage>

        {/* Card Content */}
        <View style={styles.giveAwayCardContent}>
          <View style={[APP_THEME.STYLES.flexRowBetween]}>
            <View style={[APP_THEME.STYLES.flexRowStart, { gap: 8 }]}>
              <Chip
                buttonStyle={styles.giveAwayCardChip}
                titleStyle={styles.giveAwayCardChipTitle}
                title={data?.type || 'Game'}
              />
              <Chip
                buttonStyle={styles.giveAwayCardChip}
                titleStyle={styles.giveAwayCardChipTitle}
                title={'Free'}
              />
            </View>

            {data?.worth && data.worth !== 'N/A' && (
              <Text style={APP_THEME.STYLES.offerPrice}>{data?.worth}</Text>
            )}
          </View>
          {/* Card Chips */}
          <View style={[APP_THEME.STYLES.flexRowStart, { gap: 6 }]}></View>

          {/* Card Titles */}
          <View
            style={[
              APP_THEME.STYLES.marginVerticalSm,
              APP_THEME.STYLES.flexColStart,
              { gap: 10 },
            ]}>
            <Text style={styles.giveAwayCardTitle} numberOfLines={1}>
              {data?.title || 'Giveaway Game'}
            </Text>

            <Text style={styles.giveAwayCardTime} numberOfLines={1}>
              {moment(data?.published_date).format('MMM DD, YY | h:mm')}{' '}
              {data?.end_date !== 'N/A'
                ? `- ${moment(data.end_date).format('MMM DD, YY | h:mm')}`
                : ''}
            </Text>
          </View>

          {/* CTA button */}
          <View style={{ marginTop: 14 }}>
            <AppCTA
              title={`View ${data?.type}`}
              onAction={() => onAction('clicked')}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default memo(GiveAwayCard, (prevProps, nextProps) => {
  return true;
});

const styles = StyleSheet.create({
  cardContainerStyles: {
    padding: 4,
    borderWidth: 0,
    backgroundColor: appTheme.COLORS.appSecondary,
    borderRadius: appTheme.RADIUS['3xl'],
  },

  giveAwayCardContent: {
    marginVertical: 28,
    paddingHorizontal: 10,
  },

  giveAwayCardImage: {
    position: 'relative',
    width: appTheme.SIZES.WIDTH - 40,
    height: 200,
    borderRadius: appTheme.RADIUS['3xl'],
    overflow: 'hidden',
  },

  giveAwayCardChip: {
    backgroundColor: appTheme.COLORS.appGray,
  },

  giveAwayCardChipTitle: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.md,
    color: appTheme.COLORS.white,
  },

  giveAwayCardTitle: {
    fontFamily: appTheme.FONTS['semi-bold'],
    fontSize: appTheme.SIZES.lg,
    color: appTheme.COLORS.white,
  },

  giveAwayCardTime: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.md,
    color: appTheme.COLORS.appLightGreen,
  },

  giveAwayCardBgBottomText: {
    color: appTheme.COLORS.white,
    fontSize: appTheme.SIZES.md,
    fontFamily: appTheme.FONTS.nm,
  },

  giveAwayCardBgBottomContainer: {
    gap: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(160, 160, 160, 0.3)',
    padding: 5,
    borderRadius: appTheme.RADIUS['lg'],
  },
  bgOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(160, 160, 160, 0.1)',
    width: '100%',
    height: '100%',
  },
  giveawayCardbgImageIcon: {
    width: 30,
    height: 30,
    backgroundColor: `rgba(255, 255, 255, 0.1)`,
    borderRadius: appTheme.RADIUS.md,
  },
});
