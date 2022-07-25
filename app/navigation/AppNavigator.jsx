import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';
import ApplicationScreen from '../screens/ApplicationScreen';
import StripePaymentScreen from '../screens/StripePaymentScreen';
import BobPayScreen from '../screens/BobPayScreen';
import routes from './routes';
import { PolicyProvider } from '../context/policyContext';
import PaymentScreen from '../screens/PaymentScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();
const AppNavigatotr = () => (
  <PolicyProvider>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      presentation="modal"
    >
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen
        name={routes.INS_DETAILS}
        component={Details}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name={routes.APPLICATION_FORM}
        component={ApplicationScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="StripePaymentScreen"
        component={StripePaymentScreen}
      />
      <Stack.Screen name={routes.BOB_PAY} component={BobPayScreen} />
      <Stack.Screen name={routes.PAYMENT} component={PaymentScreen} />
      <Stack.Screen name={routes.CHECKOUT} component={CheckoutScreen} />
    </Stack.Navigator>
  </PolicyProvider>
);

export default AppNavigatotr;
