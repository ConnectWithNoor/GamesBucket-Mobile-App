import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import appTheme from '@assets/constants/theme';
import DynamicIcon from '@components/common/dynamic-icon';
import staticData from '@assets/constants/common';
import { BottomSheet } from '@rneui/themed';
const { webViewActions } = staticData;

const WebviewActionModal = props => {
  const { onAction, onClose, show } = props;
  return (
    <View>
      <BottomSheet
        isVisible={show}
        onBackdropPress={onClose}
        backdropStyle={appTheme.STYLES.bottomSheetBackdropStyle}
        containerStyle={[
          appTheme.STYLES.bottomSheetContainer,
          styles.bottomSheet,
        ]}>
        <View>
          <View
            style={[
              appTheme.STYLES.flexRowBetween,
              appTheme.STYLES.bottomSheetHeader,
            ]}>
            <Text style={appTheme.STYLES.bottomSheetTitle}>Options</Text>
            <Pressable
              onPress={onClose}
              android_ripple={{
                color: appTheme.COLORS.appGray,
                borderless: true,
              }}>
              <DynamicIcon name="CloseCircle" size="22" color="#c2c2c2c2" />
            </Pressable>
          </View>
          <View style={styles.listContainer}>
            {webViewActions?.map(action => {
              return (
                <Pressable
                  key={action?.id}
                  android_ripple={{
                    color: appTheme.COLORS.appPrimary,
                  }}
                  onPress={() => onAction(action?.slug)}
                  style={{ paddingHorizontal: appTheme.SIZES.sm }}>
                  <View style={[appTheme.STYLES.flexRowStart, styles.listItem]}>
                    <DynamicIcon
                      name={action?.icon}
                      size={20}
                      color={appTheme.COLORS.white}
                    />
                    <Text
                      style={[
                        appTheme.STYLES.headerTitle,
                        {
                          width:
                            appTheme.SIZES.WIDTH - appTheme.SIZES.WIDTH / 3,
                          fontSize: appTheme.SIZES.lg,
                        },
                      ]}>
                      {action?.title}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default WebviewActionModal;

const styles = StyleSheet.create({
  bottomSheet: {
    maxHeight: 280,
    marginBottom: 10,
  },
  container: {
    width: appTheme.SIZES.WIDTH,
  },
  listContainer: {
    display: 'flex',
    gap: 5,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
  },
});
