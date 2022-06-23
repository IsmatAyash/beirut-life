import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

const PolicyPremium = ({premium, fixedPremium, unit}) => {
  return (
    <View style={styles.premiumCtr}>
      {!fixedPremium && <Text>Starting at</Text>}
      <Ionicons
        name="ios-logo-usd"
        size={SIZES.medium}
        color={COLORS.primary}
      />
      <Text style={styles.premium}>{premium}</Text>
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
}

export default PolicyPremium

const styles = StyleSheet.create({
  premiumCtr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  premium: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
  unit: {
    padding: 4,
  },
});