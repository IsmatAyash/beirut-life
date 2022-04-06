import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={SIZES.large}
          color={COLORS.secondary}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    borderRadius: SIZES.font,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    color: COLORS.dark,
    fontSize: SIZES.font,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;