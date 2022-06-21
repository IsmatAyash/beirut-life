import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';

import { InsTitle, InsPrice } from './CardSubInfo';
import { CircleButton } from './Button';
import { assets, COLORS, FONTS, SIZES } from '../constants';

const Card = ({ data, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={data.image} resizeMode="cover" style={styles.image} />
        <View style={styles.details}>
          <View style={styles.topLine}>
            <InsTitle title={data.name} subTitle={data.creator} />
            <CircleButton imgUrl={assets.heart} right={2} top={0} />
          </View>
          <Text
            numberOfLines={2}
            ellipsizeMode={data.length}
            style={styles.shortDesc}
          >
            {data.description}
          </Text>
          <InsPrice premium={data.premium} fixedPremium={data.fixedPremium} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 4,
    backgroundColor: COLORS.light,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  details: {
    flex: 2,
    width: '100%',
    marginLeft: 10,
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shortDesc: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    marginVertical: 10,
  },
});

export default Card;
