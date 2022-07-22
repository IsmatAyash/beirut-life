import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({
  imgUrl,
  onPress,
  bgColor = COLORS.white,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.circleButton,
        { backgroundColor: bgColor },
        props,
      ]}
      onPress={onPress}
    >
      <Image
        source={imgUrl}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  minWidth,
  fontSize,
  onPress,
  title,
  color = COLORS.slate,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.rectButton, { backgroundColor: color }, props]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const Button = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: SIZES.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
  image: {
    width: 20,
    height: 20,
  },
  rectButton: {
    borderRadius: SIZES.base,
    padding: SIZES.small,
  },
  buttonText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.font,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.large,
    textTransform: 'uppercase',
    fontFamily: FONTS.bold,
  },
});
