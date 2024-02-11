import React, { useCallback, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import appTheme from '@assets/constants/theme';
import CustomAnimation from '@components/common/custom-animation';
import { getInfoMessage, toastConfig } from '@assets/functions';
import TopMultiIconHeader from '@components/headers/top-multi-icons-header';
import WebviewActionModal from '@components/modals/webview-action-modal';
import Clipboard from '@react-native-clipboard/clipboard';

const WebviewScreen = ({ route, navigation }) => {
  const { webURL, title } = route?.params;
  const [showLoader, setShowLoader] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [errorMessage, setErrorMessage] = useState(getInfoMessage('loading'));

  const handleAction = useCallback(type => {
    switch (type) {
      case 'menu':
        setShowMenu(true);
        break;
      case 'back':
        navigation.goBack();
        break;
      case 'copy':
        copytoClipboard();
        break;
      case 'add_bookmark':
        handleBookmark('add');
        break;
      case 'remove_bookmark':
        handleBookmark('remove'); //TODO: create this function
        break;
      case 'my_bookmarks':
        navigation.navigate('MyBookmarks');
        break;
      case 'default':
        setShowMenu(false);
        break;
    }
  }, []);

  const copytoClipboard = useCallback(() => {
    showMessage({
      message: 'Link Copied!',
      ...toastConfig('info'),
    });
    Clipboard.setString(webURL);
  }, []);

  const onError = useCallback(() => {
    showMessage({
      message: 'Invalid URL',
      description: 'Webpage is not accessable at the moment, please try later',
      ...toastConfig('info'),
    });

    setErrorMessage(getInfoMessage('no_data'));
  }, []);

  return (
    <View style={styles.webContent}>
      <TopMultiIconHeader
        title={title || 'Web Browser'}
        onAction={type => handleAction(type)}
        type="webview"
      />
      <WebView
        source={{ uri: webURL }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoad={() => setShowLoader(false)}
        style={{
          flex: 1,
          borderWidth: 5,
          borderColor: 'red',
          backgroundColor: appTheme.COLORS.appPrimary,
        }}
        onError={onError}>
        <View
          style={[
            appTheme.STYLES.flexRowStart,
            {
              height: 200,
              maxHeight: 200,
            },
          ]}>
          <CustomAnimation data={errorMessage} style={{ maxHeight: 200 }} />
        </View>
      </WebView>
      <WebviewActionModal
        show={showMenu}
        onClose={() => setShowMenu(false)}
        onAction={type => handleAction(type)}
      />
    </View>
  );
};

export default WebviewScreen;

const styles = StyleSheet.create({
  webModal: {
    justifyContent: 'flex-start',
    margin: 0,
  },
  webContent: {
    backgroundColor: appTheme.COLORS.white,
    minHeight: appTheme.SIZES.HEIGHT + 40,
  },
});
