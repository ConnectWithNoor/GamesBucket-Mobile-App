import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import appTheme from '@assets/constants/theme';
import { toastConfig, getInfoMessage, formatText } from '@assets/functions';
import TopBackHeader from '@components/headers/top-back-header';
import { Chip } from '@rneui/themed';
import DynamicIcon from '@components/common/dynamic-icon';
import CustomAnimation from '@components/common/custom-animation';
import AppCTA from '@components/buttons/app-cta';
import staticData from '@assets/constants/common';
import { apiCall } from '@apis/index';
import { ENDPOINTS } from '@apis/endpoints';
import { showMessage } from 'react-native-flash-message';
import GiveAwayThumbnail from '@components/cards/live-tab-cards/give-away-thumbnail';

const { giveAwaySpecs } = staticData;

const GiveawayDetails = props => {
  const { route, navigation } = props;
  const { params } = route;
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(getInfoMessage('loading'));

  useEffect(() => {
    const t = setTimeout(() => {
      if (params && params !== null && params?.gameData) {
        formatData(params); // func to create
      } else if (params && params?.gameId) {
        fetchData(params.gameId);
      } else {
        setErrorMessage(getInfoMessage('not_found'));
        setisLoading(false);
      }
    }, 200);

    return () => clearTimeout(t);
  }, [params]);

  const formatData = useCallback(data => {
    const combinedData = giveAwaySpecs?.map(spec => {
      const value = params.gameData[spec.slug];

      return {
        ...spec,
        value: value !== undefined && value !== null ? value : 'N/A',
      };
    });

    const gameData = {
      ...params.gameData,
      details: combinedData,
    };

    setData(gameData);
    setisLoading(false);
  }, []);

  const handleOpenGiveaway = useCallback(item => {
    navigation.navigate('WebViewScreen', {
      webURL: item?.open_giveaway_url,
      title: data?.title,
    });
  }, []);

  //   when user navigations to giveaway details screen from bookmark screen
  const fetchData = useCallback(async gameId => {
    setisLoading(true);
    const { rawData, hasError, error } = await apiCall(
      'GET',
      `${ENDPOINTS.GIVEAWAY_LIST}?id=${gameId}`,
    );
    if (hasError) {
      showMessage({
        message: 'Error!',
        description: error,
        ...toastConfig('error'),
      });
      setErrorMessage(getInfoMessage('not_found'));
    } else {
      console.log(rawData);
    }
    setisLoading(false);
  }, []);

  const handleBookmark = useCallback(() => {}, []);

  return (
    <View style={[appTheme.STYLES.container]}>
      {/* <View style={{ marginHorizontal: 10 }}> */}
      <TopBackHeader
        title={data?.title || 'Giveaway Complete Details'}
        onAction={() => navigation.goBack()}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        {isLoading || !data ? (
          <View
            styles={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomAnimation data={errorMessage} style={{ minHeight: 200 }} />
          </View>
        ) : (
          <View style={appTheme.STYLES.contentContainer}>
            <GiveAwayThumbnail data={data} />
            <View style={styles.giveAwayCardContent}>
              {/* chip and bookmark button */}
              <View
                style={[
                  appTheme.STYLES.flexRowBetween,
                  { alignItems: 'center' },
                ]}>
                <View style={[appTheme.STYLES.flexRowStart, { gap: 8 }]}>
                  <Chip
                    title={data?.type || 'Game'}
                    buttonStyle={styles.giveAwayCardChip}
                  />
                  <Chip title={'FREE'} buttonStyle={styles.giveAwayCardChip} />
                </View>
                <Pressable
                  android_ripple={{
                    color: appTheme.COLORS.appGray,
                    borderless: true,
                  }}
                  hitSlop={50}
                  onPress={() => handleBookmark()}>
                  <DynamicIcon
                    name="ArchiveAdd"
                    size={appTheme.SIZES['3xl']}
                    color={appTheme.COLORS.appYellow}
                  />
                </Pressable>
              </View>

              {/* title and description */}
              <View
                style={[
                  appTheme.STYLES.marginVerticalSm,
                  appTheme.STYLES.flexColStart,
                  { gap: 18 },
                ]}>
                <Text style={styles.giveAwayCardTitle}>
                  {data?.title || 'Giveaway Game'}
                </Text>
                <Text style={styles.giveawayCardDescription}>
                  {data?.description || 'Description'}
                </Text>
              </View>

              {/* bullet points */}
              <View
                style={[
                  appTheme.STYLES.marginVerticalSm,
                  appTheme.STYLES.flexColStart,
                  { gap: 15 },
                ]}>
                {data?.details?.map(item => {
                  return (
                    <View style={appTheme.STYLES.flexRowStart} key={item.id}>
                      <Text
                        style={[
                          styles.instructionsText,
                          { opacity: 0.8, width: appTheme.SIZES.WIDTH / 3 },
                        ]}>
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          styles.instructionsText,
                          {
                            width:
                              appTheme.SIZES.WIDTH -
                              (appTheme.SIZES.WIDTH / 3 + 40),
                          },
                        ]}>
                        {item.value || 'N/A'}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View style={styles.instructionContainer}>
                <Text style={[styles.giveAwayCardTitle]}>Instructions</Text>
                <View style={{ paddingTop: 10, gap: 10 }}>
                  {data?.instructions &&
                    formatText(data.instructions).map((point, index) => {
                      return (
                        <Text key={index} style={styles.instructionsText}>
                          {index + 1}, {point || 'N/A'}
                        </Text>
                      );
                    })}
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      {/* </View> */}

      <View style={styles.actionContainer}>
        <AppCTA
          title="Open Giveaway"
          onPress={() => handleOpenGiveaway(data)}
          disabled={isLoading || !data}
        />
      </View>
    </View>
  );
};

export default GiveawayDetails;

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
    gap: 10,
  },

  actionContainer: {
    marginVertical: 28,
    paddingHorizontal: 10,
    gap: 10,
  },

  instructionContainer: {
    backgroundColor: appTheme.COLORS.appSecondary,
    borderRadius: appTheme.RADIUS['3xl'],
    padding: 15,
    gap: 10,
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
  giveawayCardDescription: {
    fontFamily: appTheme.FONTS.light,
    fontSize: appTheme.SIZES.md,
    color: appTheme.COLORS.appGray,
  },
  instructionsText: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.md,
    color: appTheme.COLORS.white,
  },
});
