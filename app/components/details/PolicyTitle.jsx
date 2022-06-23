import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const PolicyTitle = ({ title, subTitle }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>by {subTitle}</Text>
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
});

export default PolicyTitle;
