import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Screen from './Screen';

const ViewPDF = ({ policy }) => {
  return (
    <Screen>
      <WebView
        style={styles.container}
        originWhitelist={['*']}
        source={{ html: '<h1><center>Hello world</center></h1>' }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ViewPDF;
