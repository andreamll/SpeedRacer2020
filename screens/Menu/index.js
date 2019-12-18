//Segunda tela
//Para cada temporada escolhida, mostra opcoes de navegacao: Constructors, Drivers, Races

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, StyleSheet, ScrollView } from 'react-native';

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
    renderMenu() {

        const season = this.props.navigation.getParam('season');
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
        return items;
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    { this.renderMenu() }
                </ScrollView>
            </SafeAreaView>
        );
    }
}