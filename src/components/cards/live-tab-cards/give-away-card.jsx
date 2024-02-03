import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Profile2User } from 'iconsax-react-native';

import { Card, Chip, Image } from '@rneui/themed';
import { dummyImage, epicGamesImage } from '@assets/constants/images';
import AppCTA from '@components/buttons/app-cta';
import StatusChip from '@components/tabs/status-chip';
import appTheme from '@assets/constants/theme';
import DynamicIcon from '@components/common/dynamic-icon';

const GiveAwayCard = props => {
  const { data, onAction } = props;
  return (
    <View>
      <Card containerStyle={styles.cardContainerStyles}>
        {/* Bg Image */}
        <ImageBackground
          source={dummyImage}
          style={styles.giveAwayCardImage}
          resizeMode={'cover'}>
          <View style={styles.bgOverlay} />
          <View
            style={[
              appTheme.STYLES.flexColBetween,
              { height: 200, padding: 15 },
            ]}>
            <View style={appTheme.STYLES.flexRowBetween}>
              <StatusChip title="Active" />
              <Image
                source={epicGamesImage}
                style={styles.giveawayCardbgImageIcon}
                resizeMode="cover"
              />
            </View>
            <View
              style={[
                appTheme.STYLES.flexRowStart,
                styles.giveAwayCardBgBottomContainer,
              ]}>
              <View style={styles.overlayView} />
              <DynamicIcon name="Profile2User" variant="Bold" color="#fff" />
              <Text style={styles.giveAwayCardBgBottomText} numberOfLines={1}>
                14370+ users collected the loot
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* Card Content */}
        <View style={styles.giveAwayCardContent}>
          {/* Card Chips */}
          <View style={[appTheme.STYLES.flexRowStart, { gap: 6 }]}>
            <Chip
              buttonStyle={styles.giveAwayCardChip}
              titleStyle={styles.giveAwayCardChipTitle}
              title="Pc Game"
            />
            <Chip
              buttonStyle={styles.giveAwayCardChip}
              titleStyle={styles.giveAwayCardChipTitle}
              title="FREE"
            />
          </View>

          {/* Card Titles */}
          <View
            style={[
              appTheme.STYLES.marginVerticalSm,
              appTheme.STYLES.flexColStart,
              { gap: 10 },
            ]}>
            <Text style={styles.giveAwayCardTitle} numberOfLines={1}>
              FIFA 22 (Epic Games) Giveaway
            </Text>

            <Text style={styles.giveAwayCardTime} numberOfLines={1}>
              Live Now - Jun 08 at 08:30 PM
            </Text>
          </View>

          {/* CTA button */}
          <View style={{ marginTop: 14 }}>
            <AppCTA title="View Game" onAction={() => onAction('clicked')} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GiveAwayCard;

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
    backgroundColor: 'rgba(160, 160, 160, 0.4)',
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
