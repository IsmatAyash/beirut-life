import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();
const AppNavigatotr = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Home"
    mode="modal"
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);

export default AppNavigatotr;
