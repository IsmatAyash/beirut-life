import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants';
import PolicyHeader from './PolicyHeader';

const PolicyDescription = ({ description, style }) => {
  const [text, setText] = useState(description.slice(0, 100));
  const [more, setMore] = useState(false);

  const handleMore = () => {
    if (!more) {
      setText(description);
      setMore(true);
    } else {
      setText(description.slice(0, 100));
      setMore(false);
    }
  };

  return (
    <View style={style}>
      <PolicyHeader header="Description" />
      <Text style={styles.bodyText}>
        {text}
        {!more ? '...' : null}
        <Text style={styles.readMore} onPress={handleMore}>
          {more ? ' Show less' : 'Read more'}
        </Text>
      </Text>
    </View>
  );
};

export default PolicyDescription;

const styles = StyleSheet.create({
  bodyText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },
  readMore: {
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});
