//Tela principal (tela "zero")
//Mostra listagem com as temporadas

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import fonts from '../../fonts';
import Logo from '../../components/Logo';
import Seasons from './components/seasons';

//Estilizacao da tela
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

//Import das fontes
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
  
  //De acordo com a temporada escolhida, carrega o menu para escolha 
  //das opcoes: Construtores, Pilotos ou Corridas
  getData(year) {
    this.props.navigation.navigate('Menu', { season: year });
  }
  
  render() {
    return (
      <SafeAreaView style={ style.container }>
        <Seasons handleSeason={ this.getData } />
      </SafeAreaView>
    );
  }
}