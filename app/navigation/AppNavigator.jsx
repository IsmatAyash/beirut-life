import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';
import ApplicationScreen from '../screens/ApplicationScreen';
import routes from './routes';

const Stack = createStackNavigator();
const AppNavigatotr = () => (
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
  </Stack.Navigator>
);

export default AppNavigatotr;
