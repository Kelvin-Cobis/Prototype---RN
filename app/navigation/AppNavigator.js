import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TestScreen from '../screens/TestScreen';
import MainTabNavigator from './MainTabNavigator';
import CredentialScreen from '../screens/CredentialScreen';
import HomeScreen from '../screens/HomeScreen';
import IndexScreen from '../screens/IndexScreen';
import LinksScreen from '../screens/LinksScreen';
import RetirarScreen from '../screens/RetirarScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignInScreen';

autnticacion = createStackNavigator({
  Index: IndexScreen,
  SignIn: SignInScreen,
  Credential: CredentialScreen,

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



  },
    {
      initialRouteName: 'Test',
    })
);
