//Tela principal (tela "zero")
//Mostra listagem com as temporadas

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

//import fonts from '../../fonts';
import Logo from '../../components/Logo';
import Seasons from './components/seasons';

//Import das fontes
//(fonts());

//Estilizacao da tela
import style from '../../components/Styles'

//Renderizacao da tela
export default class Home extends Component {
  static navigationOptions = {
    headerTitle: 'SpeedRacer 2020'
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
        <ScrollView>
          <Logo />
          <Seasons handleSeason={ this.getData } />
        </ScrollView>
      </SafeAreaView>
    );
  }
}