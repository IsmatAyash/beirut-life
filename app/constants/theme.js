export const COLORS = {
  primary: '#001F2D',
  secondary: '#4D626C',
  lighter: '#f8f4f4',
  light: '#fafcfb',
  dark: '#0c0c0c',
  blue: 'dodgerblue',

  white: '#FFF',
  gray: '#74858C',
  red: '#B83350',
  green: '#2FA09A',
  teal: '#01AEBF',
  yellow: '#E3B809',
  pink: '#FF0050',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: 'InterBold',
  semiBold: 'InterSemiBold',
  medium: 'InterMedium',
  regular: 'InterRegular',
  light: 'InterLight',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.light,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.22,
    shadowRadius: 6,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

/**
 * @format
 * @flow strict-local
 */
export const MIN_MS = 60000;

export const ANDROID_DISPLAY = Object.freeze({
  default: 'default',
  spinner: 'spinner',
  clock: 'clock',
  calendar: 'calendar',
});

export const EVENT_TYPE_SET = 'set';
export const ANDROID_EVT_TYPE = Object.freeze({
  set: EVENT_TYPE_SET,
  neutralButtonPressed: 'neutralButtonPressed',
  dismissed: 'dismissed',
});

export const IOS_DISPLAY = Object.freeze({
  default: 'default',
  spinner: 'spinner',
  compact: 'compact',
  inline: 'inline',
});

const COMMON_MODES = Object.freeze({
  date: 'date',
  time: 'time',
});

export const ANDROID_MODE = COMMON_MODES;

export const WINDOWS_MODE = COMMON_MODES;

export const IOS_MODE = Object.freeze({
  ...COMMON_MODES,
  datetime: 'datetime',
  countdown: 'countdown',
});

export const DAY_OF_WEEK = Object.freeze({
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
});

export const DATE_SET_ACTION = 'dateSetAction';
export const TIME_SET_ACTION = 'timeSetAction';
export const DISMISS_ACTION = 'dismissedAction';

export const NEUTRAL_BUTTON_LABEL = 'neutralButtonLabel';
export const NEUTRAL_BUTTON_ACTION = 'neutralButtonAction';
