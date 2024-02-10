import { Pressable, StyleSheet, View } from 'react-native';
import { Header, LinearProgress } from '@rneui/themed';
import React, { memo } from 'react';
import { STATIC_DATA } from '@assets/constants';
import appTheme from '@assets/constants/theme';
import DynamicIcon from '@components/common/dynamic-icon';

const TopLRHeader = props => {
  const { title = '', type, onAction, isLoading = false } = props;

  const rightOptions = STATIC_DATA.topHeaderData.filter(
    item => item.type === type,
  )[0];

  return (
    <View>
      <Header
        backgroundColor={appTheme.COLORS.appPrimary}
        containerStyle={styles.headerContainer}
        leftComponent={{
          text: title,
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
                    <DynamicIcon
                      name={option.icon}
                      size={appTheme.SIZES['xxl']}
                      color={appTheme.COLORS.white}
                    />
                  </Pressable>
                );
              })}
          </View>
        }
      />

      {isLoading && (
        <View style={styles.progressContainer}>
          <LinearProgress
            variant="indeterminate"
            color={appTheme.COLORS.white}
            trackColor={appTheme.COLORS.appPrimary}
            style={{
              marginTop: -4,
              width: '100%',
              justifyContent: 'flex-start',
            }}
          />
        </View>
      )}
    </View>
  );
};

export default memo(TopLRHeader, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

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
  progressContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
