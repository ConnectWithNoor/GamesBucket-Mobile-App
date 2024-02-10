import appTheme from '@assets/constants/theme';
import DynamicIcon from '@components/common/dynamic-icon';
import { Header } from '@rneui/base';
import { Text } from '@rneui/themed';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

function TopBackHeader(props) {
  const { title, onAction } = props;

  return (
    <View style={styles.container}>
      <Header
        backgroundColor={appTheme.COLORS.appPrimary}
        containerStyle={styles.headerContainer}
        leftComponent={
          <DynamicIcon
            name="ArrowLeft"
            size={appTheme.SIZES['3xl']}
            color={appTheme.COLORS.white}
            onPress={onAction}
          />
        }
        centerComponent={{
          text: title,
          style: [
            appTheme.STYLES.headerTitle,
            { width: appTheme.SIZES.WIDTH - appTheme.SIZES.WIDTH / 3 },
          ],
        }}
      />
    </View>
  );
}

export default TopBackHeader;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 0,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: '100',
  },
});
