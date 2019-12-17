import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import ConstructorsScreen from './screens/Constructors';
import DriversScreen from './screens/Drivers';
import RacesScreen from './screens/Races';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Constructors: {
      screen: ConstructorsScreen,
    },
    Drivers: {
      screen: DriversScreen,
    },
    Races: {
      screen: RacesScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
    }
  }
);

export default createAppContainer(AppNavigator);

