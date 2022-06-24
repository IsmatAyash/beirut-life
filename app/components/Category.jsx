import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';

const Category = ({ title, onPress, IconComponent }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        <View style={styles.titleCtr}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.base * 1.2,
    color: COLORS.white,
    width: 75,
    textAlign: 'center',
    marginTop: 4,
    fontFamily: FONTS.bold,
  },
  titleCtr: {
    padding: 0,
    textAlign: 'center',
  },
});

export default Category;
