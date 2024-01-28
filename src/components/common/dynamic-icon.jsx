import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  CloseCircle,
  SearchNormal1,
  Sort,
  ArrowDown2,
} from 'iconsax-react-native';

const iconComponent = {
  CloseCircle,
  SearchNormal1,
  Sort,
  ArrowDown2,
};

const DynamicIcon = props => {
  const { size = '20', color = '#fff', name, ...rest } = props;

  const IconComponent = iconComponent[name];

  if (!IconComponent) return null;

  return <IconComponent size={size} color={color} {...rest} />;
};

export default DynamicIcon;

const styles = StyleSheet.create({});
