import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';

import PolicyTitle from './details/PolicyTitle';
import PolicyPremium from './details/PolicyPremium';
import { CircleButton } from './Button';
import { assets, COLORS, FONTS, SIZES } from '../constants';

const Card = ({ data, onPress }) => {
  const imageUri = data.image || null;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={imageUri ? { uri: imageUri } : assets.imagePlaceholder}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.details}>
          <View style={styles.topLine}>
            <PolicyTitle title={data.title} subTitle={data.creator} />
            <CircleButton imgUrl={assets.heart} right={2} top={0} />
          </View>
          <Text
            numberOfLines={2}
            ellipsizeMode={data.length}
            style={styles.shortDesc}
          >
            {data.description}
          </Text>
          <PolicyPremium
            premium={data.premium}
            fixedPremium={data.fixedPremium}
            unit={data.unit}
          />
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
    backgroundColor: COLORS.white,
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
