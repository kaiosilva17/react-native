import { DefaultTheme } from 'react-native-paper';
import { AppColors } from './Colors';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColors.primaryBlue,
    accent: AppColors.primaryPurple,
    background: AppColors.lightGray,
    text: AppColors.darkGray,
    error: AppColors.error,
  },
};