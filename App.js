import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import das telas
import HomeScreen from './screens/Home';
import ConstructorsScreen from './screens/Constructors';
import DriversScreen from './screens/Drivers';
import MenuScreen from './screens/Menu';
import RacesScreen from './screens/Races';
import DetailsScreen from './screens/Details';

//Rotas do app
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
    Menu: {
      screen: MenuScreen,
    },
    Races: {
      screen: RacesScreen,
    },
    Details: {
      screen: DetailsScreen,
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

