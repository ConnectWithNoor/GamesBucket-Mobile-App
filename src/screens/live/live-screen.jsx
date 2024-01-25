import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TopLRHeader from '@components/headers/top-lr-header';
import appTheme from '@assets/constants/theme';
import { Gift, Tag } from 'iconsax-react-native';
import StatsCard from '@components/cards/live-tab-cards/stats-card';
import { STATIC_DATA } from '@assets/constants';
import PlatformList from '@components/tabs/platform-list';
import GiveAwayCard from '@components/cards/live-tab-cards/give-away-card';

const LiveScreen = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const handleChangePlatform = item => {
    setSelectedPlatform(item);

    // write logic to refetch all giveaway for the selected platform;
  };

  return (
    <View style={appTheme.STYLES.container}>
      {/* top header */}
      <TopLRHeader
        title="Live Giveaway"
        type="live"
        onAction={a => console.log(a)}
      />
      {/* stats card */}

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

      {/* Platform List */}
      <View>
        <PlatformList
          categories={STATIC_DATA.gamePlatformData}
          onAction={val => setSelectedPlatform(val)}
          selectedCatefory={selectedPlatform}
        />
      </View>

      {/* Card */}
      <ScrollView
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <GiveAwayCard />
        <GiveAwayCard />
        <GiveAwayCard />
      </ScrollView>
    </View>
  );
};

export default LiveScreen;

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
