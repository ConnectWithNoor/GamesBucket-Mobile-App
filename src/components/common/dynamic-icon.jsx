import { StyleSheet } from 'react-native';
import React from 'react';

import {
  CloseCircle,
  SearchNormal1,
  Sort,
  ArrowDown2,
  Gift,
  Tag,
  Profile2User,
  ArchiveAdd,
  ArrowLeft,
  Menu,
  Copy,
  PenAdd,
  PenRemove,
  RulerPen,
} from 'iconsax-react-native';
import appTheme from '@assets/constants/theme';

const iconComponent = {
  CloseCircle,
  SearchNormal1,
  Sort,
  ArrowDown2,
  Gift,
  Tag,
  Profile2User,
  ArchiveAdd,
  ArrowLeft,
  Menu,
  Copy,
  PenAdd,
  PenRemove,
  RulerPen,
};

const DynamicIcon = props => {
  const { size = '20', color = '#fff', name, ...rest } = props;

  const IconComponent = iconComponent[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      size={size}
      color={color || appTheme.COLORS.white}
      {...rest}
    />
  );
};

export default DynamicIcon;

const styles = StyleSheet.create({});
