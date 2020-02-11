import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/CobrarScreen';
import RetirarScreen from '../screens/RetirarScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import InfoTransaccionScreen from '../screens/InfoTransaccionScreen';
import ContactosScreen from '../screens/ContactosScreen';
import ConfirmacionPagoScreen from '../screens/ConfirmacionPagoScreen';





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
    Contactos: ContactosScreen,
    ConfirmacionPago: ConfirmacionPagoScreen,
    Confirmation: ConfirmationScreen
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
  { Settings: SettingsScreen, },
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
