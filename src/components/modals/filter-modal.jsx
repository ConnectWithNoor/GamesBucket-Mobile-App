import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { BottomSheet, Divider } from '@rneui/themed';
import appTheme, { COLORS } from '@assets/constants/theme';
import DynamicIcon from '@components/common/dynamic-icon';
import { APP_THEME, STATIC_DATA } from '@assets/constants';
import SelectDropdown from '@components/common/select-dropdown';
import AppCTA from '@components/buttons/app-cta';
import { showMessage } from 'react-native-flash-message';
import { toastConfig } from '@assets/functions';

const FilterModal = props => {
  const { show, onClose, onAction, selectedFilters } = props;
  const [selectedGiveaway, setSelectedGiveaway] = useState(
    STATIC_DATA.giveawayType[3].key,
  );
  const [selectedSort, setSelectedSort] = useState(
    STATIC_DATA.giveawaySortBy[3].key,
  );

  const handleSubmit = useCallback(() => {
    if (
      selectedGiveaway.key === selectedFilters.type ||
      selectedSort.key === selectedFilters['sort-by']
    ) {
      showMessage({
        message: 'Please select a filter',
        ...toastConfig('danger'),
      });
    } else {
      const filters = {
        'sort-by': selectedSort.key,
        type: selectedGiveaway.key,
      };
      const selectedValues = {
        type: selectedGiveaway.key,
        'sort-by': selectedSort.key,
      };
      onAction(filters, selectedValues);
    }
  }, [selectedGiveaway, selectedSort]);

  const handleReset = useCallback(() => {
    const filters = {};
    const selectedValues = {
      type: STATIC_DATA.giveawaySortBy[3].key,
      'sort-by': STATIC_DATA.giveawayType[3].key,
    };
    onAction(filters, selectedValues);
  }, []);

  useEffect(() => {
    if (show) {
      const sftype = STATIC_DATA.giveawayType.find(
        item => item.key === selectedFilters.type,
      );
      const sfsort = STATIC_DATA.giveawaySortBy.find(
        item => item.key === selectedFilters['sort-by'],
      );

      setSelectedGiveaway(sftype);
      setSelectedSort(sfsort);
    }
  }, [show]);

  return (
    <BottomSheet
      isVisible={show}
      onBackdropPress={onClose}
      backdropStyle={appTheme.STYLES.bottomSheetBackdropStyle}
      containerStyle={appTheme.STYLES.bottomSheetContainer}>
      <View>
        <View
          style={[
            appTheme.STYLES.flexRowBetween,
            appTheme.STYLES.bottomSheetHeader,
          ]}>
          <Text style={appTheme.STYLES.bottomSheetTitle}>Filters</Text>
          <Pressable
            onPress={onClose}
            android_ripple={{
              color: appTheme.COLORS.appGray,
              borderless: true,
            }}>
            <DynamicIcon name="CloseCircle" size="22" color="#c2c2c2c2" />
          </Pressable>
        </View>
        <Divider />
        {/* dropdown */}
        <View style={styles.formContainer}>
          <SelectDropdown
            label="Giveaway Type"
            list={STATIC_DATA.giveawayType}
            placeholder="Select a type"
            icon="ArrowDown2"
            value={selectedGiveaway}
            onSelected={val => setSelectedGiveaway(val)}
          />

          <SelectDropdown
            label="Sort By"
            list={STATIC_DATA.giveawaySortBy}
            placeholder="Select a type"
            icon="ArrowDown2"
            value={selectedSort}
            onSelected={val => setSelectedSort(val)}
          />
        </View>

        {/* btns */}

        <View style={[APP_THEME.STYLES.flexRowBetween, styles.actionContainer]}>
          <AppCTA
            title="Reset"
            onAction={handleReset}
            size="sm"
            customStyle={[
              {
                backgroundColor: appTheme.COLORS.appPrimary,
              },
              styles.btnContainer,
            ]}
            titleStyle={[
              {
                color: appTheme.COLORS.appYellow,
              },
              styles.btnText,
            ]}
          />
          <AppCTA
            title="Apply"
            onAction={handleSubmit}
            size="sm"
            customStyle={[styles.btnContainer]}
            titleStyle={[{ color: COLORS.appPrimary }, styles.btnText]}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

// export default React.memo(FilterModal, (prevProps, nextProps) => {
//   return JSON.stringify(prevProps) === JSON.stringify(nextProps);
// });

export default FilterModal;
const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 20,
    height: appTheme.SIZES.HEIGHT * 0.6,
  },

  actionContainer: {
    marginTop: 'auto',
  },

  btnContainer: {
    minWidth: appTheme.SIZES.WIDTH / 2 - 50,
    paddingVertical: 8,
  },
  btnText: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.FONTS.lg,
  },
});
