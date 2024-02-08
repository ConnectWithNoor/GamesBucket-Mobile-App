import { StyleSheet, View, FlatList } from 'react-native';
import React, { memo } from 'react';
import { Chip } from '@rneui/themed';
import appTheme from '@assets/constants/theme';

const PlatformList = props => {
  const { categories, onAction, selectedCatefory } = props;
  const renderPlatforms = ({ item }) => {
    const isSelected = selectedCatefory === item.name;
    return (
      <Chip
        title={item.name}
        buttonStyle={[
          isSelected ? styles.platformChipActive : styles.platformChip,
        ]}
        onPress={() => onAction(item.name)}
        titleStyle={[
          isSelected
            ? styles.platformChipTitleActive
            : styles.platformChipTitle,
        ]}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderPlatforms}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default memo(
  PlatformList,
  (prevProps, nextProps) =>
    prevProps.selectedCatefory === nextProps.selectedCatefory,
);

const styles = StyleSheet.create({
  platformChip: {
    minWidth: 50,
    backgroundColor: appTheme.COLORS.appTransparent,
  },
  platformChipActive: {
    backgroundColor: appTheme.COLORS.appYellow,
    minWidth: 50,
  },
  platformChipTitle: {
    color: appTheme.COLORS.appLightGreen,
    fontFamily: appTheme.FONTS.nm,
    textTransform: 'capitalize',
    fontSize: appTheme.SIZES.md,
  },
  platformChipTitleActive: {
    color: appTheme.COLORS.appPrimary,
    fontSize: appTheme.SIZES.md,
    textTransform: 'capitalize',
    fontSize: appTheme.SIZES.md,
  },
  container: {
    backgroundColor: appTheme.COLORS.appTransparent,
    paddingVertical: 28,
    paddingHorizontal: 15,
    gap: 5,
  },
});
