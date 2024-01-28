import { Brodcast, Game, DiscountCircle, Setting } from 'iconsax-react-native';
import appTheme from './theme';
import LiveScreen from '@screens/live/live-screen';
import SettingsScreen from '@screens/settings/settings-screen';

const bottomTabsList = [
  {
    id: 1,
    name: 'Live',
    component: LiveScreen,
    icon: (
      <Brodcast
        size={appTheme.SIZES['3xl']}
        variant="Linear"
        color={appTheme.COLORS.appGray}
      />
    ),
    actionIcon: (
      <Brodcast
        size={appTheme.SIZES['3xl']}
        variant="Bold"
        color={appTheme.COLORS.appYellow}
      />
    ),
  },
  {
    id: 2,
    name: 'Games',
    component: LiveScreen,
    icon: <Game size={appTheme.SIZES['3xl']} color={appTheme.COLORS.appGray} />,
    actionIcon: (
      <Game size={appTheme.SIZES['3xl']} color={appTheme.COLORS.appYellow} />
    ),
  },
  {
    id: 3,
    name: 'Offers',
    component: LiveScreen,
    icon: (
      <DiscountCircle
        size={appTheme.SIZES['3xl']}
        color={appTheme.COLORS.appGray}
      />
    ),
    actionIcon: (
      <DiscountCircle
        size={appTheme.SIZES['3xl']}
        color={appTheme.COLORS.appYellow}
      />
    ),
  },
  {
    id: 4,
    name: 'Settings',
    component: SettingsScreen,
    icon: (
      <Setting size={appTheme.SIZES['3xl']} color={appTheme.COLORS.appGray} />
    ),
    actionIcon: (
      <Setting size={appTheme.SIZES['3xl']} color={appTheme.COLORS.appYellow} />
    ),
  },
];

const topHeaderData = [
  {
    id: 1,
    type: 'live',
    options: [
      {
        id: 1,
        icon: 'SearchNormal1',
        name: 'search',
      },
      {
        id: 2,
        icon: 'Sort',
        name: 'filter',
      },
    ],
  },
  {
    id: 2,
    type: 'explore',
    options: [
      {
        id: 1,
        icon: 'SearchNormal1',
        name: 'search',
      },
      {
        id: 2,
        icon: 'Sort',
        name: 'filter',
      },
    ],
  },
];

const gamePlatformData = [
  {
    id: 'gp01',
    name: 'all',
  },
  {
    id: 'gp02',
    name: 'pc',
  },
  {
    id: 'gp03',
    name: 'steam',
  },
  {
    id: 'gp04',
    name: 'epic-games-store',
  },
  {
    id: 'gp05',
    name: 'ubisoft',
  },
  {
    id: 'gp06',
    name: 'gog',
  },
];

const giveawayType = [
  {
    id: 1,
    key: 'game',
    value: 'Game',
  },
  {
    id: 2,
    key: 'loot',
    value: 'Loot',
  },
  {
    id: 3,
    key: 'beta',
    value: 'Beta',
  },
  {
    id: 4,
    key: 'none',
    value: 'None',
  },
];

const giveawaySortBy = [
  {
    id: 1,
    key: 'date',
    value: 'Date',
  },
  {
    id: 2,
    key: 'value',
    value: 'Value',
  },
  {
    id: 3,
    key: 'popularity',
    value: 'Popularity',
  },
  {
    id: 4,
    key: 'none',
    value: 'None',
  },
];

const staticData = {
  bottomTabsList,
  topHeaderData,
  gamePlatformData,
  giveawayType,
  giveawaySortBy,
};

export default staticData;
