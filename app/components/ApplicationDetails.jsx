import { StyleSheet, Text, View, Modal } from 'react-native';
import { useFormikContext } from 'formik';
import { COLORS } from '../constants';
import { RectButton } from './Button';
import Screen from './Screen';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';
import moment from 'moment';

const ApplicationDetails = ({ visible, setVisible }) => {
  const { values } = useFormikContext();
  const navigation = useNavigation();

  return (
    <Modal visible={visible} animationType="slide">
      <Screen>
        <Text>Full Name : {values.fullName}</Text>
        <Text>Gender : {values.Gender}</Text>
        <Text>Nationality : {values.nationality}</Text>
        <View style={styles.container}>
          <RectButton
            title="Checkout"
            color={COLORS.blurple_dark}
            onPress={() => navigation.navigate(routes.STRIPE_PAY)}
          />
          <RectButton title="Cancel" onPress={() => setVisible(false)} />
        </View>
      </Screen>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});

export default ApplicationDetails;
