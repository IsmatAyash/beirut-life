import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SIZES, COLORS, FONTS } from '../constants';
import { InsPrice, InsTitle } from './CardSubInfo';

const DetailDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [more, setMore] = useState(false);

  const handleMore = () => {
    if (!more) {
      setText(data.description);
      setMore(true);
    } else {
      setText(data.description.slice(0, 100));
      setMore(false);
    }
  };

  return (
    <>
      <View style={styles.details}>
        <InsTitle title={data.name} subTitle={data.creator} />
        <InsPrice price={data.price} />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>Description</Text>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            {text}
            {!more && '...'}
            <Text style={styles.readMore} onPress={handleMore}>
              {more ? ' Show less' : 'Read more'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailDesc;

const styles = StyleSheet.create({
  details: {
    marginTop: SIZES.font,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.base,
  },
  description: {
    marginVertical: SIZES.extraLarge * 1.5,
    paddingHorizontal: SIZES.base,
  },
  title: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  body: {
    marginTop: SIZES.base,
  },
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
