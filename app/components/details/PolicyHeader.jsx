import { StyleSheet, Text, View } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants';

const PolicyHeader = ({ header }) => {
  return <Text style={styles.header}>{header}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.font,
    color: COLORS.primary,
    marginBottom: SIZES.base / 2
  },
});

export default PolicyHeader;
