import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import PolicyHeader from './PolicyHeader';

const PolicyCovers = ({ covers, style }) => {
  return (
    <View style={style}>
      <PolicyHeader header="Covers" />
      {covers.map((itm, index) => (
        <Text style={styles.bodyText} key={index}>
          {itm}
        </Text>
      ))}
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

export default PolicyCovers;
