import { StyleSheet, View } from 'react-native';
import React from 'react';
import TopLRHeader from '@components/headers/top-lr-header';
import appTheme from '@assets/constants/theme';
import { Gift, Tag } from 'iconsax-react-native';
import StatsCard from '@components/cards/live-tab-cards/stats-card';

const HomeScreen = () => {
  return (
    <View style={appTheme.STYLES.container}>
      <TopLRHeader
        title="Live Giveaway"
        type="live"
        onAction={a => console.log(a)}
      />

      <View style={styles.statsContainer}>
        <StatsCard
          icon={<Gift size="25" color="#FF8A65" />}
          title="Total"
          value="$482.97"
        />
        <StatsCard
          icon={<Tag size="25" color="#FF8A65" />}
          title="Active"
          value="$117.00"
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: appTheme.SIZES.xl,
    width: '100%',
  },
});
