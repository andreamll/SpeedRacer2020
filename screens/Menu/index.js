//Segunda tela
//Para cada temporada escolhida, mostra opcoes de navegacao: Constructors, Drivers, Races

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Text, StyleSheet } from 'react-native';
import Loading from '../../components/Loading';

import fonts from '../../fonts';

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
export default class Menu extends Component {
  state = {
    data: [],
    loading: true,
  }

    //Mostra botoes com opcoes de navegacao
    showMenu(season) {
        let items = [];

        items.push(
            //Construtores
            <Button
                key={ `constructors-${season}` }
                onPress={ () => this.props.navigation.navigate('Constructors', { season: season } ) }
                title="Constructors">
            </Button>,

            //Pilotos
            <Button
                key={ `drivers-${season}` }
                onPress={ () => this.props.navigation.navigate('Drivers', { season: season } ) }
                title="Drivers">
            </Button>,

            //Corridas
            <Button
                key={ `races-${season}` }
                onPress={ () => this.props.navigation.navigate('Races', { season: season } ) }
                title="Races">
            </Button>
        );

        this.state.loading = false;
        return items;
    }

    render() {
        return (
            <SafeAreaView style={ style.container }>
                <Loading show={ this.state.loading } color="blue"/>
                {
                    this.showMenu( this.props.navigation.getParam('season') ) 
                }
            </SafeAreaView>
        );
    }
}