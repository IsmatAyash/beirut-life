import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({ imgUrl, onPress, ...props }) => {
  return (
    <TouchableOpacity style={[styles.circleButton, props]} onPress={onPress}>
      <Image source={imgUrl} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, onPress, ...props }) => {
  return (
    <TouchableOpacity style={[styles.rectButton, props]} onPress={onPress}>
      <Text style={styles.buttonText}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: SIZES.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
  image: {
    width: 24,
    height: 24,
  },
  rectButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.small,
  },
  buttonText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textAlign: 'center',
  },
});
