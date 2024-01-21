import { Brodcast, Game, DiscountCircle, Setting } from 'iconsax-react-native';
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

const staticData = {
  bottomTabsList,
};

export default staticData;
