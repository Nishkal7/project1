import { Dimensions } from 'react-native';

const TARGET_WIDTH = 375;
// TODO: there's some race condition happening now in SH where Dimensions isn't ready
// not sure if that's going to mess us up here down the road
const { height, width } = Dimensions.get('window');
export const SCALE_FACTOR = width > TARGET_WIDTH ? Math.sqrt(width / TARGET_WIDTH) : 1;