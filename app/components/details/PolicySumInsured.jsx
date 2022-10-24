import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import PolicyHeader from './PolicyHeader';

const PolicySumInsured = ({ sumInsured, sumInsuredRemark, style }) => {
  return (
    <View style={style}>
      <PolicyHeader header="Sum Insured" />
      <Text style={styles.bodyText}>
        Total value: ${sumInsured.toLocaleString(2)}
      </Text>
      {sumInsuredRemark ? (
        <Text style={styles.remark}>{sumInsuredRemark}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  bodyText: {
    fontSize: SIZES.small * 1.09,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },
  remark: { fontSize: SIZES.small, lineHeight: SIZES.large },
});

export default PolicySumInsured;
