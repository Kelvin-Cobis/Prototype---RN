import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import TestScreen from '../screens/TestScreen';
import MainTabNavigator from './MainTabNavigator';
import CredentialScreen from '../screens/CredentialScreen';
import IndexScreen from '../screens/IndexScreen';
import SignInScreen from '../screens/autenticacion/TipoDeCuentaScreen';
import SignInScreen2 from '../screens/autenticacion/InformacionPersonalScreen';
import SignInScreen3 from '../screens/autenticacion/CondicionesDeServicioScreen';
import SignInScreen4 from '../screens/autenticacion/ClaveOTPScreen';
import SolicitudPagoScreen from '../screens/inicio/SolicitudPagoScreen';
import InfoTransaccionScreen from '../screens/inicio/InfoTransaccionScreen';
import PagoQRScreen from '../screens/pagar/PagoQRScreen';
import ConfirmacionPagoScreen from '../screens/pagar/ConfirmacionPagoScreen';
import IngresoPINCobro from '../screens/cobrar/IngresoPINCobro';
import IngresarPINScreen from '../screens/IngresarPINScreen';
import ConfirmacionQRScreen from '../screens/cobrar/ConfirmacionQRScreen';





autenticacion = createStackNavigator({
  Index: IndexScreen,
  SignIn: SignInScreen,
  SignIn2: SignInScreen2,
  SignIn3: SignInScreen3,
  SignIn4: SignInScreen4,
  Credential: CredentialScreen,
  IngresarPIN: IngresarPINScreen,
});


export default createAppContainer(

  createSwitchNavigator({
    Main: MainTabNavigator,
    Autenticacion: autenticacion,

    //Pantalla de inicio
    SolicitudPago: SolicitudPagoScreen,
    InfoTransaccion: InfoTransaccionScreen,

    //Pantalla de Pagos
    PagoQR :PagoQRScreen,
    ConfirmacionPago: ConfirmacionPagoScreen,

    //Pantalla de Cobros
    IngresoPINCobro:IngresoPINCobro,
    ConfirmacionQR:ConfirmacionQRScreen,


    Test: TestScreen,
  },
    {
      initialRouteName: 'Autenticacion',      
    })
);
