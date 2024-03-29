import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet, View, RefreshControl } from 'react-native';
import debounce from 'lodash.debounce';
import TopLRHeader from '@components/headers/top-lr-header';
import appTheme from '@assets/constants/theme';
import StatsCard from '@components/cards/live-tab-cards/stats-card';
import { STATIC_DATA } from '@assets/constants';
import { getInfoMessage, toastConfig, wait } from '@assets/functions';
import PlatformList from '@components/tabs/platform-list';
import GiveAwayCard from '@components/cards/live-tab-cards/give-away-card';
import FilterModal from '@components/modals/filter-modal';
import DynamicIcon from '@components/common/dynamic-icon';

import { apiCall } from '@apis/index';
import { ENDPOINTS } from '@apis/endpoints';
import { showMessage } from 'react-native-flash-message';
import { Divider } from '@rneui/themed';
import CustomAnimation from '@components/common/custom-animation';

const ITEM_HEIGHT = 480;

const LiveScreen = props => {
  const { navigation } = props;
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [statsErrors, setStatsErrors] = useState(null);
  const [stats, setStats] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [gameData, setGameData] = useState([]);
  const [messageData, setMessageData] = useState(getInfoMessage('loading'));
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    'sort-by': STATIC_DATA.giveawayType[3].key,
    type: STATIC_DATA.giveawayType[3].key,
  });

  const handleFilters = useCallback(
    (filters, value) => {
      setSelectedFilters(value);
      fetchGiveawayList(selectedPlatform, filters);
      toggleFilterModal();
    },
    [selectedPlatform],
  );

  const fetchTotalGiveaway = useCallback(async () => {
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
  }, []);

  const fetchGiveawayList = useCallback(async (platform, filters) => {
    let params = {
      ...filters,
    };
    if (platform !== '' && platform !== 'all') {
      params = { platform, ...params };
    }
    setMessageData(getInfoMessage('loading'));
    setGameData([]);
    setIsLoading(true);

    const { rawData, hasError, error } = await apiCall(
      'GET',
      ENDPOINTS.GIVEAWAY_LIST,
      { params },
    );

    if (hasError) {
      showMessage({
        message: 'Error!',
        description: error,
        ...toastConfig('danger'),
      });
      setGameData([]);
      setMessageData(getInfoMessage('no_data'));
      setIsLoading(false);
      return;
    }
    if (rawData.length > 1) {
      setGameData(rawData);
    } else {
      setGameData([]);
      setMessageData(getInfoMessage('no_data'));
    }

    setIsLoading(false);
  }, []);

  const handleScrollY = useCallback(
    event => {
      if (gameData.length > 1) {
        setScrollY(event.nativeEvent.contentOffset.y);
      }
    },
    [gameData.length], // no dependencies, so the function doesn't change
  );

  const debouncedHandleScrollY = useMemo(
    () => debounce(handleScrollY, 150),
    [handleScrollY],
  );

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

  const memorizedOnAction = useCallback(
    item => navigation.navigate('GiveawayDetails', { gameData: item }),
    [],
  );

  const renderItem = useCallback(
    ({ item }) => (
      <GiveAwayCard
        key={item.id}
        data={item}
        onAction={() => memorizedOnAction(item)}
      />
    ),
    [],
  );

  const onRefresh = useCallback(() => {
    fetchTotalGiveaway();
    fetchGiveawayList(selectedPlatform);
    setSelectedFilters({
      'sort-by': STATIC_DATA.giveawayType[3].key,
      type: STATIC_DATA.giveawayType[3].key,
    });
    wait(1000).then(() => setIsRefreshing(false));
  }, [selectedPlatform]);

  const EmptyList = useMemo(() => {
    return <CustomAnimation data={messageData} style={{ minHeight: 200 }} />;
  }, [messageData]);

  useEffect(() => {
    setSelectedFilters({
      'sort-by': STATIC_DATA.giveawayType[3].key,
      type: STATIC_DATA.giveawayType[3].key,
    });
    fetchGiveawayList(selectedPlatform, {});
  }, [selectedPlatform]);

  useEffect(() => {
    fetchTotalGiveaway();

    return () => debouncedHandleScrollY.cancel();
  }, []);

  return (
    <View style={appTheme.STYLES.container}>
      {/* top header */}

      <TopLRHeader
        title="Live Giveaway"
        type="live"
        onAction={a => handleHeaderActions(a)}
        isLoading={isLoading}
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
          selectedCategory={selectedPlatform}
        />
      </View>

      {/* Cards List */}

      <FlatList
        data={gameData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        maxToRenderPerBatch={4}
        initialNumToRender={4}
        windowSize={31}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        onScroll={event => {
          event.persist(); // Persist the synthetic event
          debouncedHandleScrollY(event);
        }}
        scrollEventThrottle={16}
        ListEmptyComponent={EmptyList}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
      <FilterModal
        show={showFiltersModal}
        onClose={toggleFilterModal}
        onAction={(filters, value) => handleFilters(filters, value)}
        selectedFilters={selectedFilters}
      />
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
