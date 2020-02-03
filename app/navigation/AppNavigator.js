import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import IndexScreen from '../screens/IndexScreen';
import IconScreen from '../screens/IconScreen';
import CredentialScreen from '../screens/CredentialScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Index: IndexScreen,
    Main: MainTabNavigator,
    Icon:IconScreen,
    Autenticacion :CredentialScreen,
  },
  {
    initialRouteName: 'Icon',
  })
);
