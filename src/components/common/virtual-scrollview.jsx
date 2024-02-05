import { FlatList, StyleSheet } from 'react-native';
import React from 'react';

const VirtualScrollView = props => {
  return (
    <FlatList
      {...props}
      data={[]}
      keyExtractor={(_, index) => 'item' + index}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => <>{props.children}</>}
    />
  );
};

export default VirtualScrollView;

const styles = StyleSheet.create({});
