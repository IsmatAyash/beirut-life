import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { SIZES, SHADOWS, assets } from '../constants';
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  DetailDesc,
  Screen,
} from '../components';
import routes from '../navigation/routes';

const Details = ({ route, navigation }) => {
  const item = route.params;
  return (
    <Screen>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.imageCtr}>
        <Image source={item.image} resizeMode="cover" style={styles.image} />
        <CircleButton
          imgUrl={assets.left}
          onPress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
        <CircleButton
          imgUrl={assets.heart}
          onPress={() => console.log('Add to favorite')}
          right={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>

      <DetailDesc data={item} style={{ marginTop: SIZES.font }} />
      <View style={styles.button}>
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          style={styles.button}
          title="Buy Now"
          onPress={() => navigation.navigate(routes.APPLICATION_FORM, item)}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
