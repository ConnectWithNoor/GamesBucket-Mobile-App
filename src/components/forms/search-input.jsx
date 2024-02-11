import { StyleSheet, View } from 'react-native';
import React from 'react';
import appTheme from '@assets/constants/theme';
import DynamicIcon from '@components/common/dynamic-icon';
import { Input } from '@rneui/themed';

const SearchInput = ({ value, onChange, placeholder = 'Search here...' }) => {
  return (
    <View>
      <Input
        value={value}
        onChangeText={value => onChange(value)}
        placeholder={placeholder}
        rightIcon={
          <DynamicIcon
            name={'search'}
            size={25}
            color={appTheme.COLORS.appGray}
          />
        }
        containerStyle={{ paddingHorizontal: 0 }}
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyle}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: '#353B41',
    borderWidth: 1,
    borderRadius: appTheme.RADIUS.xl,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: appTheme.COLORS.appSecondary,
  },

  inputTextStyle: {
    color: appTheme.COLORS.white,
    fontSize: appTheme.SIZES.nm,
    fontFamily: appTheme.FONTS.lg,
    textDecorationLine: 'none',
  },
});
