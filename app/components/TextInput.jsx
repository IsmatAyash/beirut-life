import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={SIZES.medium}
          color={COLORS.gray}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={COLORS.gray}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    flexDirection: 'row',
    padding: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    color: COLORS.black,
    fontSize: SIZES.font,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
