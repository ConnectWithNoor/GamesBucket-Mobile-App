import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { BottomSheet, Divider } from '@rneui/themed';
import appTheme, { COLORS } from '@assets/constants/theme';
import DynamicIcon from '@components/common/dynamic-icon';
import { APP_THEME, STATIC_DATA } from '@assets/constants';
import SelectDropdown from '@components/common/select-dropdown';
import AppCTA from '@components/buttons/app-cta';

const FilterModal = props => {
  const [selected, setSelected] = useState('');
  const { show, onClose } = props;

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
            onSelected={val => setSelected(val)}
          />

          <SelectDropdown
            label="Sort By"
            list={STATIC_DATA.giveawaySortBy}
            placeholder="Select a type"
            icon="ArrowDown2"
            onSelected={val => setSelected(val)}
          />
        </View>

        {/* btns */}

        <View style={[APP_THEME.STYLES.flexRowBetween, styles.actionContainer]}>
          <AppCTA
            title="Reset"
            onAction={() => {}}
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
            onAction={() => {}}
            size="sm"
            customStyle={[styles.btnContainer]}
            titleStyle={[{ color: COLORS.appPrimary }, styles.btnText]}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

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
