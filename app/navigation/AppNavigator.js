import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TestScreen from '../screens/TestScreen';
import MainTabNavigator from './MainTabNavigator';
import CredentialScreen from '../screens/CredentialScreen';
import IndexScreen from '../screens/IndexScreen';
import SignInScreen from '../screens/SignInScreen';
import SolicitudPagoScreen from '../screens/SolicitudPagoScreen';

autnticacion = createStackNavigator({
  Index: IndexScreen,
  SignIn: SignInScreen,
  Credential: CredentialScreen,

});
homeStackNavigation = createStackNavigator({
  SolicitudPago: SolicitudPagoScreen,  
});


export default createAppContainer(
  
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    
    Main: MainTabNavigator,
    /*Credential: CredentialScreen,
    Home: HomeScreen,
    Index: IndexScreen,
    Link: LinksScreen,
    Retirar: RetirarScreen,
    Settings: SettingsScreen,
    SignIn: SignInScreen,*/
    Aut: autnticacion,
    Test: TestScreen,
    homeStak: homeStackNavigation,



  },
    {
      initialRouteName: 'Test',
    })
);
