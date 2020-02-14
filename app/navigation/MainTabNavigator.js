import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/inicio/HomeScreen';
import LinksScreen from '../screens/pagar/PagosScreen';
import CobrarScreen from '../screens/cobrar/CobrarScreen';
import RetirarScreen from '../screens/retirar/RetirarScreen';
import ConfirmationScreen from '../screens/inicio/ConfirmationScreen';
import ConfirmationScreenPagar from '../screens/pagar/PagoExitosoScreen';
import InfoTransaccionScreen from '../screens/inicio/InfoTransaccionScreen';
import ContactosScreenPagar from '../screens/pagar/ContactosScreen';

import CobroPINScreen from '../screens/cobrar/CobroPINScreen';
import CobroQRScreen from '../screens/cobrar/CobroQRScreen';
import ContactosScreenCobrar from '../screens/cobrar/ContactosScreen';
import EnvioSolicitudPago from '../screens/cobrar/EnvioSolicitudPago';
import ConfirmationScreenCobrar from '../screens/cobrar/ConfirmationScreen';

import MontoaRetirarScreen from '../screens/retirar/MontoaRetirarScreen';
import InformacionDeRetiro from '../screens/retirar/InformacionDeRetiro';
import PindeRetiroScreen from '../screens/retirar/PindeRetiroScreen';



import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Confirmation: ConfirmationScreen,
    InfoTransaccion: InfoTransaccionScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Inicio', tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    Contactos: ContactosScreenPagar,
    //    ConfirmacionPago: ConfirmacionPagoScreen,
    TransaccionExitosa: ConfirmationScreenPagar
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Pagar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-cash'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Cobrar: CobrarScreen,
    CobroQR: CobroQRScreen,
    CobroPIN: CobroPINScreen ,
    Contactos: ContactosScreenCobrar,
    EnvioSolicitudPago:EnvioSolicitudPago,
    ConfirmationCobrar:ConfirmationScreenCobrar,
  },
  config
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Cobrar',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused}
    name={Platform.OS === 'ios' ? 'ios-options' : 'logo-usd'} />
  ),
};
SettingsStack.path = '';


const RetirarStack = createStackNavigator(
  {
    Retirar: RetirarScreen,
    MontoaRetirar:MontoaRetirarScreen,
    InformacionDeRetiro: InformacionDeRetiro,
    PindeRetiro:PindeRetiroScreen,
  },
  config
);

RetirarStack.navigationOptions = {
  tabBarLabel: 'Retirar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-card'} />
  ),
};

RetirarStack.path = '';




const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  RetirarStack,


});

tabNavigator.path = '';

export default tabNavigator;
