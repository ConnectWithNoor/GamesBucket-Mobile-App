import {
  Brodcast,
  Game,
  DiscountCircle,
  Setting,
  SearchNormal1,
  Sort,
} from 'iconsax-react-native';
import { COLORS, SIZES } from './theme';
import HomeScreen from '@screens/home/home-screen';
import SettingsScreen from '@screens/settings/settings-screen';

const bottomTabsList = [
  {
    id: 1,
    name: 'Live',
    component: HomeScreen,
    icon: (
      <Brodcast size={SIZES['3xl']} variant="Linear" color={COLORS.appGray} />
    ),
    actionIcon: (
      <Brodcast size={SIZES['3xl']} variant="Bold" color={COLORS.appYellow} />
    ),
  },
  {
    id: 2,
    name: 'Games',
    component: HomeScreen,
    icon: <Game size={SIZES['3xl']} color={COLORS.appGray} />,
    actionIcon: <Game size={SIZES['3xl']} color={COLORS.appYellow} />,
  },
  {
    id: 3,
    name: 'Offers',
    component: HomeScreen,
    icon: <DiscountCircle size={SIZES['3xl']} color={COLORS.appGray} />,
    actionIcon: <DiscountCircle size={SIZES['3xl']} color={COLORS.appYellow} />,
  },
  {
    id: 4,
    name: 'Settings',
    component: SettingsScreen,
    icon: <Setting size={SIZES['3xl']} color={COLORS.appGray} />,
    actionIcon: <Setting size={SIZES['3xl']} color={COLORS.appYellow} />,
  },
];

const topHeaderData = [
  {
    id: 1,
    type: 'live',
    options: [
      {
        id: 1,
        icon: <SearchNormal1 size={SIZES['xxl']} color={COLORS.white} />,
        name: 'search',
      },
      {
        id: 2,
        icon: <Sort size={SIZES['xxl']} color={COLORS.white} />,
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
        icon: <SearchNormal1 size={SIZES['xxl']} color={COLORS.white} />,
        name: 'search',
      },
      {
        id: 2,
        icon: <Sort size={SIZES['xxl']} color={COLORS.white} />,
        name: 'filter',
      },
    ],
  },
];

const staticData = {
  bottomTabsList,
  topHeaderData,
};

export default staticData;
