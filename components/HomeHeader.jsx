import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const HomeHeader = ({ handlePress, cart, onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={assets.logo} resizeMode="contain" style={styles.logo} />
        <TouchableOpacity style={styles.cart} onPress={handlePress}>
          <MaterialCommunityIcons
            name="shopping-outline"
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
      <View style={styles.searchBox}>
        <View style={styles.search}>
          <Feather
            name="search"
            size={SIZES.extraLarge}
            color={COLORS.primary}
            style={{ marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search policies..."
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
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
});
