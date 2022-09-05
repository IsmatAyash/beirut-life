import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES, assets, setting } from '../constants';
import TextInput from './TextInput';
import Icon from './Icon';
import Category from './Category';

const ctgs = [
  { cat: 'All', bgColor: COLORS.orange, name: 'select-all' },
  { cat: 'Accident', bgColor: COLORS.orange, name: 'car' },
  // { cat: 'Home', bgColor: COLORS.orange, name: 'home-lock' },
  // { cat: 'Worker', bgColor: COLORS.orange, name: 'account-lock-outline' },
  // { cat: 'Life', bgColor: COLORS.orange, name: 'card-account-details-outline' },
  { cat: 'Travel', bgColor: COLORS.orange, name: 'shield-airplane-outline' },
  { cat: 'Medical', bgColor: COLORS.orange, name: 'medical-bag' },
];

const HomeHeader = ({ handlePress, onSearch, onFilter }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={styles.logo}
        />
        <TouchableOpacity style={styles.headerIcon} onPress={handlePress}>
          <MaterialCommunityIcons
            name="account-heart-outline"
            size={SIZES.extraLarge + 4}
            color={COLORS.gray}
          />
        </TouchableOpacity>
      </View>

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
                  iconColor={COLORS.white}
                />
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
    flex: 1,
    backgroundColor: COLORS.green,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
  },
  headerIcon: {
    position: 'absolute',
    top: 14,
    right: 10,
  },
  welcome: {
    margin: 5,
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
  searchBox: { 
    marginHorizontal: 10, 
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default HomeHeader;
