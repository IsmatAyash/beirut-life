import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants';

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: COLORS.red,
  },
});

export default ErrorMessage;
