import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import PolicyHeader from './PolicyHeader';

const PolicyRemark = ({ remark, style }) => {
  return (
    <View style={style}>
      <PolicyHeader header="Remarks" />
      <Text style={styles.bodyText}>{remark}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },
});

export default PolicyRemark;
