import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { InsTitle, InsPrice } from './CardSubInfo';

export const InsCard = ({ data, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={data.image} resizeMode="cover" style={styles.image} />
          <CircleButton imgUrl={assets.heart} right={10} top={10} />
        </View>
        <View style={styles.details}>
          <InsTitle title={data.name} subTitle={data.creator} />
          <View style={styles.buttonPrice}>
            <InsPrice price={data.price} />
            <RectButton
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate('Details', { data })}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  header: {
    width: '100%',
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  details: {
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: SIZES.extraLarge,
    alignItems: 'flex-start',
  },
  buttonPrice: {
    width: '100%',
    marginTop: SIZES.base,
    marginBottom: SIZES.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default InsCard;
