import { StyleSheet, SafeAreaView } from 'react-native';
// import Constants from 'expo-constants';

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
