import { Pressable, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';
import React from 'react';
import { STATIC_DATA } from '@assets/constants';
import appTheme from '@assets/constants/theme';

const TopLRHeader = props => {
  const { title = '', type, onAction } = props;

  const rightOptions = STATIC_DATA.topHeaderData.filter(
    item => item.type === type,
  )[0];

  return (
    <Header
      backgroundColor={appTheme.COLORS.appPrimary}
      containerStyle={styles.headerContainer}
      leftComponent={{
        text: title || '',
        style: [
          appTheme.STYLES.headerTitle,
          { width: appTheme.SIZES.WIDTH - appTheme.SIZES.WIDTH / 3 },
        ],
      }}
      rightComponent={
        <View style={styles.headerRight}>
          {rightOptions &&
            rightOptions.options.map(option => {
              return (
                <Pressable
                  key={option.id}
                  android_ripple={{
                    color: appTheme.COLORS.appGray,
                  }}
                  onPress={() => onAction(option.name)}>
                  {option.icon}
                </Pressable>
              );
            })}
        </View>
      }
    />
  );
};

export default TopLRHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 0,
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: appTheme.SIZES.lg,
  },
});
