import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  DetailDesc,
} from '../components';

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={StyleSheet.screen}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.imageCtr}>
        <Image source={data.image} resizeMode="cover" style={styles.image} />
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
        <CircleButton
          imgUrl={assets.heart}
          handlePress={() => navigation.goBack()}
          right={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>

      <DetailDesc data={data} style={{ marginTop: SIZES.font }} />
      <View style={styles.button}>
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    paddingVertical: SIZES.font,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    zIndex: 1,
  },
  imageCtr: {
    width: '100%',
    height: 373,
  },
  image: { width: '100%', height: '100%' },
});

export default Details;
