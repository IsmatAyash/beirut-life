import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

export const PolicyTitle = ({ title, subTitle }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>by {subTitle}</Text>
    </View>
  );
};

export const PolicyCovers = ({ covers }) => {
  return (
    <View style={styles.description}>
      <Text style={styles.header}>Covers</Text>
      {covers.map((itm, index) => (
        <Text style={styles.bodyText} key={index}>
          {itm}
        </Text>
      ))}
    </View>
  );
};

export const PolicyPremium = ({ premium, fixedPremium, unit }) => {
  return (
    <View style={styles.priceCtr}>
      {!fixedPremium && <Text>Starting at</Text>}
      <Ionicons
        name="ios-logo-usd"
        size={SIZES.medium}
        color={COLORS.primary}
      />
      <Text style={styles.price}>{premium}</Text>
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  subTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  header: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small * 1.1,
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
  unit: {
    padding: 4,
  },
  bodyText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },
  description: {
    marginVertical: SIZES.medium,
    paddingHorizontal: SIZES.base,
  },
});
