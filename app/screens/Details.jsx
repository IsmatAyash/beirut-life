import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { SIZES, SHADOWS, assets } from '../constants';
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  PolicyPremium,
  PolicyTitle,
  PolicyDescription,
  PolicyCovers,
  PolicySumInsured,
  PolicyRemark,
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

      <View style={styles.details}>
        <View style={styles.title}>
          <PolicyTitle title={item.name} subTitle={item.creator} />
          <PolicyPremium
            premium={item.premium}
            fixedPremium={item.fixedPremium}
            unit={item.unit}
          />
        </View>
        <PolicyDescription
          style={styles.subDetail}
          description={item.description}
        />
        <PolicyCovers style={styles.subDetail} covers={item.covers} />
        <PolicySumInsured
          style={styles.subDetail}
          sumInsured={item.sumInsured}
          sumInsuredRemark={item.sumInsuredRemark}
        />
        {item.remark && (
          <PolicyRemark style={styles.subDetail} remark={item.remark} />
        )}
      </View>

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
  details: { marginVertical: SIZES.medium, paddingHorizontal: SIZES.base },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subDetail: { marginTop: SIZES.medium },
});

export default Details;
