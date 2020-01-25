import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/components/login';
import HomeScreen from './src/components/home';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  { headerMode: 'none'},
  {
    initialRouteName: 'Login',
  }
);

export default AppNavigation = createAppContainer(RootStack);