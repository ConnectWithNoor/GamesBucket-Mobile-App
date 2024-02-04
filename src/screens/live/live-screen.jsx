import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import TopLRHeader from '@components/headers/top-lr-header';
import appTheme from '@assets/constants/theme';
import StatsCard from '@components/cards/live-tab-cards/stats-card';
import { STATIC_DATA } from '@assets/constants';
import { toastConfig } from '@assets/functions';
import PlatformList from '@components/tabs/platform-list';
import GiveAwayCard from '@components/cards/live-tab-cards/give-away-card';
import FilterModal from '@components/modals/filter-modal';
import DynamicIcon from '@components/common/dynamic-icon';

import { apiCall } from '@apis/index';
import { ENDPOINTS } from '@apis/endpoints';
import { showMessage } from 'react-native-flash-message';
import { Divider } from '@rneui/themed';

const LiveScreen = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [statsErrors, setStatsErrors] = useState(null);
  const [stats, setStats] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [gameData, setGameData] = useState([{ id: 1 }, { id: 1 }]);

  const fetchTotalGiveaway = async () => {
    const { rawData, hasError, error } = await apiCall(
      'GET',
      ENDPOINTS.TOTAL_GIVEAWAY,
    );

    if (hasError) {
      console.log('Error', error);
      showMessage({
        message: 'Stats Error',
        description: error,
        ...toastConfig('danger'),
      });
      setStatsErrors(error);
      return;
    }

    setStats(rawData);
  };

  const handleScrollY = event => {
    if (gameData.length > 1) {
      setScrollY(event.nativeEvent.contentOffset.y);
    }
  };

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

  useEffect(() => {
    fetchTotalGiveaway();
  }, []);

  return (
    <View style={appTheme.STYLES.container}>
      {/* top header */}
      <TopLRHeader
        title="Live Giveaway"
        type="live"
        onAction={a => handleHeaderActions(a)}
      />
      {/* stats card */}

      {!statsErrors && stats && scrollY < 150 && (
        <View style={styles.statsContainer}>
          <StatsCard
            icon={<DynamicIcon name="Gift" color="#FF8A65" />}
            title="Total"
            value={`$${stats?.worth_estimation_usd}`}
          />
          <StatsCard
            icon={<DynamicIcon name="Tag" color="#FF8A65" />}
            title="Active"
            value={stats?.active_giveaways_number}
          />
        </View>
      )}

      {scrollY > 150 && <Divider />}

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
        contentInsetAdjustmentBehavior="automatic"
        onScroll={handleScrollY}>
        <GiveAwayCard onAction={val => console.log(val)} />
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
