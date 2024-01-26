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
import FilterModal from '@components/modals/filter-modal';

const LiveScreen = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const handleChangePlatform = item => {
    setSelectedPlatform(item);

    // write logic to refetch all giveaway for the selected platform;
  };

  const toggleFilterModal = () => {
    setShowFiltersModal(prev => !prev);
  };

  const handleHeaderActions = type => {
    if (type === 'filter') {
      toggleFilterModal();
    }
  };

  return (
    <View style={appTheme.STYLES.container}>
      {/* top header */}
      <TopLRHeader
        title="Live Giveaway"
        type="live"
        onAction={a => handleHeaderActions(a)}
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

      <FilterModal show={showFiltersModal} onClose={toggleFilterModal} />
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
