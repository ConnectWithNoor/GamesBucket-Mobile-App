import {
  StyleSheet,
  Text,
  View,
  Pressa,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import TopBackHeader from '@components/headers/top-back-header';
import appTheme from '@assets/constants/theme';
import SearchInput from '@components/forms/search-input';
import FastImage from 'react-native-fast-image';
import { Button, FAB, ListItem } from '@rneui/themed';
import DynamicIcon from '@components/common/dynamic-icon';

const bookmarks = [
  {
    id: 1,
    type: 'giveaway',
    thumbnail:
      'https://fastly.picsum.photos/id/241/200/300.jpg?hmac=MJpjq0wpgfHHZPIf9EqkNFRblOuJdo_V9X-AiCRZ2-A',
    title: 'Hello World',
    created_at: new Date(),
  },
  {
    id: 2,
    type: 'giveaway',
    thumbnail:
      'https://fastly.picsum.photos/id/241/200/300.jpg?hmac=MJpjq0wpgfHHZPIf9EqkNFRblOuJdo_V9X-AiCRZ2-A',
    title: 'Hello World 2',
    created_at: new Date(),
  },
  {
    id: 3,
    type: 'giveaway',
    thumbnail:
      'https://fastly.picsum.photos/id/241/200/300.jpg?hmac=MJpjq0wpgfHHZPIf9EqkNFRblOuJdo_V9X-AiCRZ2-A',
    title: 'Hello World 2',
    created_at: new Date(),
  },
  {
    id: 4,
    type: 'giveaway',
    thumbnail:
      'https://fastly.picsum.photos/id/241/200/300.jpg?hmac=MJpjq0wpgfHHZPIf9EqkNFRblOuJdo_V9X-AiCRZ2-A',
    title: 'Hello World 2',
    created_at: new Date(),
  },
  {
    id: 5,
    type: 'giveaway',
    thumbnail:
      'https://fastly.picsum.photos/id/241/200/300.jpg?hmac=MJpjq0wpgfHHZPIf9EqkNFRblOuJdo_V9X-AiCRZ2-A',
    title: 'Hello World 2',
    created_at: new Date(),
  },
  {
    id: 6,
    type: 'giveaway',
    thumbnail:
      'https://fastly.picsum.photos/id/241/200/300.jpg?hmac=MJpjq0wpgfHHZPIf9EqkNFRblOuJdo_V9X-AiCRZ2-A',
    title: 'Hello World 2',
    created_at: new Date(),
  },
];

const BookmarksScreen = ({ navigation }) => {
  const [bookmarkDate, setBookmarkData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [queryText, setQueryText] = useState('');

  useEffect(() => {
    setBookmarkData(bookmarks);
    setMasterData(bookmarks);
  }, []);

  const handleSearch = useCallback(
    text => {
      if (text && text?.trim()?.length >= 1) {
        const newData = masterData.filter(item => {
          const itemData = item?.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();

          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });

        setBookmarkData(newData);
        setQueryText(text);
      } else {
        setBookmarkData(masterData);
        setQueryText('');
      }
    },
    [masterData],
  );

  const handleAction = useCallback(item => {
    console.log(item);
  }, []);

  return (
    <View style={[appTheme.STYLES.container]}>
      <TopBackHeader
        title="My Bookmarks"
        onAction={() => navigation.goBack()}
      />
      <View styles={styles.contentContainer}>
        <SearchInput
          value={queryText}
          onChangeText={val => handleSearch(val)}
          placeholder="Search Bookmarks..."
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <View style={[appTheme.STYLES.contentContainer, { paddingBottom: 10 }]}>
          <View style={[appTheme.STYLES.flexColBetween, { gap: 12 }]}>
            {bookmarkDate &&
              bookmarkDate.length >= 1 &&
              bookmarkDate.map(item => {
                return (
                  <Pressable key={item.id} onPress={() => handleAction(item)}>
                    <ListItem containerStyle={styles.listItem}>
                      {/* image - left part*/}
                      <View style={styles.thumbContainer}>
                        <FastImage
                          source={{
                            uri: item?.thumbnail,
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                          }}
                          style={styles.thumbnail}
                          resizeMode={FastImage.resizeMode.cover}
                        />
                      </View>

                      {/* content - center part */}
                      <ListItem.Content
                        style={[appTheme.STYLES.flexColBetween, { gap: 10 }]}>
                        <ListItem.Title
                          style={styles.itemTitle}
                          numberOfLines={1}
                          ellipsizeMode="tail">
                          {item.title}
                        </ListItem.Title>

                        <Text style={styles.itemType}>{item.type}</Text>
                        <Button
                          type="ghost"
                          titleStyle={styles.btnTextStyles}
                          buttonStyle={styles.btnStyles}>
                          <DynamicIcon
                            name="Trash"
                            color={appTheme.COLORS.red}
                            size={22}
                          />{' '}
                          Delete
                        </Button>
                      </ListItem.Content>
                      {/* icon right part */}
                      <DynamicIcon
                        name="ArchiveTick"
                        variant="Bold"
                        color={appTheme.COLORS.appYellow}
                        size={22}
                      />
                    </ListItem>
                  </Pressable>
                );
              })}
          </View>
        </View>
      </ScrollView>
      <FAB
        visible={bookmarks.length >= 1}
        buttonStyle={styles.actionBtnStyle}
        titleStyle={styles.actionTitleStyle}
        containerStyle={appTheme.STYLES.marginVerticalSm}
        title="Delete All"
        size="small"
        icon={
          <DynamicIcon name="Trash" color={appTheme.COLORS.white} size={22} />
        }
      />
    </View>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: appTheme.RADIUS.lg,
    backgroundColor: appTheme.COLORS.appPrimary,
    borderColor: '#333C5F',
    borderWidth: 1,
    paddingVertical: appTheme.SIZES.sm,
    paddingHorizontal: appTheme.SIZES.sm,
    alignItems: 'flex-start',
  },
  thumbContainer: {
    flexDirection: 'row',
    width: 100,
    height: 100,
    borderColor: '#333C5F',
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: appTheme.RADIUS.xl,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: appTheme.RADIUS.xl,
  },
  itemTitle: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.nm,
    color: appTheme.COLORS.white,
  },
  itemType: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.sm,
    color: appTheme.COLORS.appGray,
    textTransform: 'capitalize',
  },
  btnTextStyles: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.nm,
    color: appTheme.COLORS.red,
  },
  btnStyles: {
    paddingHorizontal: 0,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 0,
  },
  actionBtnStyle: {
    backgroundColor: appTheme.COLORS.red,
  },
  actionTitleStyle: {
    fontFamily: appTheme.FONTS.nm,
    fontSize: appTheme.SIZES.nm,
  },
});
