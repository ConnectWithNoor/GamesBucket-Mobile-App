import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import appTheme from '@assets/constants/theme';
import { SelectList } from 'react-native-dropdown-select-list';
import DynamicIcon from './dynamic-icon';

const SelectDropdown = props => {
  const {
    label = '',
    onSelected,
    list,
    placeholder = 'Select a value',
    icon,
    value,
  } = props;

  const handleSelection = val => {
    const selectedItem = list.find(item => item.key === val);
    onSelected(selectedItem);
  };

  return (
    <View>
      <Text style={appTheme.STYLES.formLabel}>{label}</Text>
      <SelectList
        data={list}
        setSelected={val => handleSelection(val)}
        placeholder={placeholder}
        fontFamily={appTheme.FONTS.nm}
        boxStyles={styles.selectContainer}
        inputStyles={styles.selectContainerInput}
        dropdownStyles={styles.selectContainerDropdown}
        dropdownTextStyles={styles.selectContainerInput}
        defaultOption={value}
        save="key"
        search={false}
        arrowicon={<DynamicIcon name={icon} color={appTheme.COLORS.appGray} />}
      />
    </View>
  );
};

export default SelectDropdown;

const styles = StyleSheet.create({
  selectContainer: {
    borderColor: '#404040',
    backgroundColor: '#2A3250',
  },
  selectContainerInput: {
    color: appTheme.COLORS.white,
  },
  selectContainerDropdown: {
    borderColor: '#404040',
    backgroundColor: '#2A3250',
    position: 'absolute',
    top: 40,
    width: '100%',
    zIndex: 1,
  },
});
