//Tela principal (tela "zero")
//Mostra listagem com as temporadas

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import fonts from '../../fonts';
import Logo from '../../components/Logo';

import Seasons from './components/seasons';


//Estilizacao
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


//Definicao da fonte do app
(fonts());


//Renderizacao da tela
export default class Home extends Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  }

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  getData(year) {
    this.props.navigation.navigate('Season', { season: year });
  }
  
  render() {
    return (
      <SafeAreaView style={ style.container }>
        <Seasons handleSeason={ this.getData } />
      </SafeAreaView>
    );
  }
}