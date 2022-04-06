import { DefaultTheme } from '@react-navigation/native';
import { COLORS } from '../constants';

export default navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
  },
};
