import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BottomSheet, Divider } from '@rneui/themed';
import appTheme from '@assets/constants/theme';
import { CloseCircle } from 'iconsax-react-native';

const FilterModal = props => {
  const { show, onClose } = props;

  return (
    <BottomSheet
      isVisible={show}
      onBackdropPress={onClose}
      backdropStyle={styles.backdropStyle}
      containerStyle={styles.bottomSheetContainer}>
      <View style={styles.container}>
        <View
          style={[appTheme.STYLES.flexRowBetween, styles.bottomSheetHeader]}>
          <Text style={styles.bottomSheetTitle}>Filters</Text>
          <Pressable
            onPress={onClose}
            android_ripple={{
              color: appTheme.COLORS.appGray,
              borderless: true,
            }}>
            <CloseCircle color="#c2c2c2" size="22" />
          </Pressable>
        </View>
        <Divider />
      </View>
    </BottomSheet>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  backdropStyle: {
    backgroundColor: appTheme.COLORS.black,
    opacity: 0.4,
  },

  container: {
    width: '100%',
  },

  bottomSheetContainer: {
    backgroundColor: appTheme.COLORS.appSecondary,
    maxHeight: appTheme.SIZES.HEIGHT * 0.8,
    marginTop: 'auto',
    borderRadius: appTheme.RADIUS['3xl'],
    marginHorizontal: 10,
    alignItems: 'flex-start',
    padding: 20,
  },

  bottomSheetHeader: {
    paddingBottom: appTheme.SIZES.lg,
  },

  bottomSheetTitle: {
    color: appTheme.COLORS.white,
    fontSize: appTheme.SIZES.lg,
  },
});
