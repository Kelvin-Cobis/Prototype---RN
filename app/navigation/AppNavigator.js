import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TestScreen from '../screens/TestScreen';
import MainTabNavigator from './MainTabNavigator';
import CredentialScreen from '../screens/CredentialScreen';
import IndexScreen from '../screens/IndexScreen';
import SignInScreen from '../screens/autenticacion/SignInScreen';
import SignInScreen2 from '../screens/autenticacion/SignInScreen-2';
import SignInScreen3 from '../screens/autenticacion/SignInScreen-3';
import SignInScreen4 from '../screens/autenticacion/SignInScreen-4';
import SolicitudPagoScreen from '../screens/SolicitudPagoScreen';

autenticacion = createStackNavigator({
  Index: IndexScreen,
  SignIn: SignInScreen,
  SignIn2: SignInScreen2,
  SignIn3: SignInScreen3,
  SignIn4: SignInScreen4,
  Credential: CredentialScreen,

});


export default createAppContainer(

  createSwitchNavigator({
    Main: MainTabNavigator,
    Autenticacion: autenticacion,
    Test: TestScreen,
  },
    {
      initialRouteName: 'Autenticacion',      
    })
);
