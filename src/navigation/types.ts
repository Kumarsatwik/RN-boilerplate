import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStack';

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;
