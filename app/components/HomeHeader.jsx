import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES, assets } from '../constants';
import TextInput from './TextInput';
import Icon from './Icon';
import Category from './Category';

const ctgs = [
  { cat: 'All', bgColor: COLORS.pink, name: 'select-all' },
  { cat: 'Motor', bgColor: COLORS.pink, name: 'car' },
  { cat: 'Home', bgColor: COLORS.pink, name: 'home-lock' },
  { cat: 'Worker', bgColor: COLORS.pink, name: 'account-lock-outline' },
  { cat: 'Life', bgColor: COLORS.pink, name: 'card-account-details-outline' },
  { cat: 'Travel', bgColor: COLORS.pink, name: 'shield-airplane-outline' },
  { cat: 'Medical', bgColor: COLORS.pink, name: 'medical-bag' },
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
        {ctgs.map((ctg) => (
          <Category
            key={ctg.cat}
            title={ctg.cat}
            IconComponent={
              <Icon name={ctg.name} backgroundColor={ctg.bgColor} />
            }
            onPress={() => onFilter(ctg.cat)}
          />
        ))}
      </View>
    </View>
  );
};

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
    backgroundColor: COLORS.pink,
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

export default HomeHeader;
