import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, memo } from 'react';

import { Card, Chip, Image } from '@rneui/themed';
import { epicGamesImage } from '@assets/constants/images';
import AppCTA from '@components/buttons/app-cta';

import appTheme from '@assets/constants/theme';

import { APP_THEME } from '@assets/constants';
import moment from 'moment';
import GiveAwayThumbnail from './give-away-thumbnail';

const GiveAwayCard = props => {
  const { data, onAction } = props;

  return (
    <View>
      <Card containerStyle={styles.cardContainerStyles}>
        {/* Bg Image */}
        <GiveAwayThumbnail data={data} />
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
});
