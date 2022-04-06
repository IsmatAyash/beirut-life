import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES, assets } from '../constants';
import TextInput from './TextInput';
import Icon from './Icon';
import Category from './Category';

const cats = [
  { cat: 'All', bgColor: COLORS.primary, name: 'select-all' },
  { cat: 'Motor', bgColor: COLORS.yellow, name: 'car' },
  { cat: 'Home', bgColor: COLORS.teal, name: 'home-lock' },
  { cat: 'Worker', bgColor: COLORS.red, name: 'account-lock-outline' },
  { cat: 'Life', bgColor: COLORS.blue, name: 'card-account-details-outline' },
  { cat: 'Travel', bgColor: COLORS.green, name: 'shield-airplane-outline' },
  { cat: 'Medical', bgColor: COLORS.red, name: 'medical-bag' },
];

const HomeHeader = ({ handlePress, cart, onSearch, onFilter }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={assets.logo} resizeMode="contain" style={styles.logo} />
        <TouchableOpacity style={styles.cart} onPress={handlePress}>
          <MaterialCommunityIcons
            name="account-heart-outline"
            size={SIZES.extraLarge + 6}
            color={COLORS.white}
          />
          <View style={styles.badgeCtr}>
            <Text style={styles.badge}>{cart}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.greeting}>Welcome to BeirutLife 👋🏽 </Text>
        <Text style={styles.description}>
          Insurance policies customized for you
        </Text>
      </View>
      <TextInput
        icon="text-search"
        placeholder="Search policy..."
        onChangeText={onSearch}
      />
      <View style={styles.category}>
        {cats.map((cat) => (
          <Category
            key={cat.cat}
            title={cat.cat}
            IconComponent={
              <Icon name={cat.name} backgroundColor={cat.bgColor} />
            }
            onPress={() => onFilter(cat.cat)}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.font,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 40,
  },
  cart: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  badgeCtr: {
    position: 'relative',
    top: -35,
    right: -20,
    width: 20,
    height: 20,
    borderRadius: 500,
    backgroundColor: COLORS.red,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    color: COLORS.white,
    fontSize: SIZES.small,
  },
  welcome: {
    marginVertical: SIZES.font,
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
  searchBox: { marginTop: SIZES.font },
  search: {
    width: '100%',
    borderRadius: SIZES.font,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
