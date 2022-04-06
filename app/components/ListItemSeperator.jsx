import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';

const ListItemSeperator = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.light,
  },
});

export default ListItemSeperator;
