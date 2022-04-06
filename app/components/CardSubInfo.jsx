import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { Ionicons } from '@expo/vector-icons';

export const InsTitle = ({ title, subTitle }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>by {subTitle}</Text>
    </View>
  );
};

export const InsPrice = ({ price }) => {
  return (
    <View style={styles.priceCtr}>
      <Ionicons
        name="ios-logo-usd"
        size={SIZES.medium}
        color={COLORS.primary}
      />
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  subTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  priceCtr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
});
