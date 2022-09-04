import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES, assets, setting } from '../constants';
import TextInput from './TextInput';
import Icon from './Icon';
import Category from './Category';

const ctgs = [
  { cat: 'All', bgColor: COLORS.lighter, name: 'select-all' },
  { cat: 'Accident', bgColor: COLORS.lighter, name: 'car' },
  // { cat: 'Home', bgColor: COLORS.lighter, name: 'home-lock' },
  // { cat: 'Worker', bgColor: COLORS.lighter, name: 'account-lock-outline' },
  // { cat: 'Life', bgColor: COLORS.lighter, name: 'card-account-details-outline' },
  { cat: 'Travel', bgColor: COLORS.lighter, name: 'shield-airplane-outline' },
  { cat: 'Medical', bgColor: COLORS.lighter, name: 'medical-bag' },
];

const HomeHeader = ({ handlePress, cart, onSearch, onFilter }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={assets.logonew}
          resizeMode="contain"
          style={styles.logo}
        />
        <TouchableOpacity style={styles.cart} onPress={handlePress}>
          <MaterialCommunityIcons
            name="account-heart-outline"
            size={SIZES.extraLarge + 6}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={assets.nft01}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.welcome}>
          <Text style={styles.description}>{setting.slogan}</Text>
          <Text style={styles.greeting}>{setting.greeting} </Text>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            icon="text-search"
            placeholder="Search policy..."
            onChangeText={onSearch}
          />
        </View>
        <View style={styles.category}>
          {ctgs.map((ctg) => (
            <Category
              key={ctg.cat}
              title={ctg.cat}
              IconComponent={
                <Icon
                  name={ctg.name}
                  backgroundColor={ctg.bgColor}
                  iconColor={COLORS.secondary}
                />
              }
              onPress={() => onFilter(ctg.cat)}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: COLORS.lighter,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 60,
  },
  cart: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  welcome: {
    margin: SIZES.font,
  },
  greeting: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  description: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  searchBox: { marginHorizontal: 10 },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default HomeHeader;
