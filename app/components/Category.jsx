import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.base,
    color: COLORS.white,
    width: 40,
    textAlign: 'center',
    marginTop: 4,
    fontFamily: FONTS.bold,
  },
});

export default Category;
