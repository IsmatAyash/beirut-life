import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';
import ApplicationScreen from '../screens/ApplicationScreen';
import StripePaymentScreen from '../screens/StripePaymentScreen';
import routes from './routes';
import { PolicyProvider } from '../context/policyContext';

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
    </Stack.Navigator>
  </PolicyProvider>
);

export default AppNavigatotr;
