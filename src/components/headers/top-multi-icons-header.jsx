import { Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import appTheme, { COLORS } from '@assets/constants/theme';
import { Header, LinearProgress, Text } from '@rneui/themed';
import DynamicIcon from '@components/common/dynamic-icon';
import staticData from '@assets/constants/common';
const { topHeaderData } = staticData;

const TopMultiIconHeader = props => {
  const { title, onAction, type } = props;
  const [actions, setActions] = useState([]);

  useEffect(() => {
    if (type) {
      const rightOptions = topHeaderData.find(item => item.type === type);
      setActions(rightOptions);
    }

    return () => setActions([]);
  }, [type]);

  return (
    <View>
      <Header
        containerStyle={styles.headerContainer}
        backgroundColor={appTheme.COLORS.appPrimary}
        rightContainerStyle={{ justifyContent: 'center' }}
        leftComponent={
          <View
            style={[
              appTheme.STYLES.flexRowStart,
              { gap: 16, alignItems: 'center' },
            ]}>
            <Pressable onPress={() => onAction('back')} hitSlop={50}>
              <DynamicIcon
                name="ArrowLeft"
                size={appTheme.SIZES.xxl}
                color={appTheme.COLORS.appWhite}
              />
            </Pressable>
            <Text
              numberOfLines={1}
              style={
                [
                  appTheme.STYLES.headerTitle,
                  {
                    width: appTheme.SIZES.WIDTH - appTheme.SIZES.WIDTH / 3,
                  },
                ] // TODO: styles
              }>
              {title}
            </Text>
          </View>
        }
        rightComponent={
          <View style={styles.headerRight}>
            {actions &&
              actions?.options?.map(option => {
                return (
                  <Pressable
                    android_ripple={{
                      color: appTheme.COLORS.appGray,
                      borderless: true,
                    }}
                    key={option.id}
                    onPress={() => onAction(option.name)}>
                    <DynamicIcon
                      name={option.icon}
                      size={appTheme.SIZES.xl}
                      color={appTheme.COLORS.appWhite}
                    />
                  </Pressable>
                );
              })}
          </View>
        }
      />
    </View>
  );
};

export default TopMultiIconHeader;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: appTheme.COLORS.appPrimary,
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
