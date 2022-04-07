import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AppNavigatotr from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const App = () => {
  const [loaded] = useFonts({
    InterBold: require('./app/assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./app/assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./app/assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./app/assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./app/assets/fonts/Inter-Light.ttf'),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigatotr />
    </NavigationContainer>
  );
};

export default App;
