//Segunda tela
//Para cada temporada escolhida, mostra opcoes de navegacao: Constructors, Drivers, Races

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, ScrollView, View } from 'react-native';

//Estilizacao da tela
import Logo from '../../components/Logo';
import style from '../../components/Styles'

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
                style=  {style.boxPar}
                key={ `constructors-${season}` }
                onPress={ () => this.props.navigation.navigate('Constructors', { season: season } ) }
                title="Constructors">
            </Button>,

            //Pilotos
            <Button
                //style=  {style.boxImpar}
                key={ `drivers-${season}` }
                onPress={ () => this.props.navigation.navigate('Drivers', { season: season } ) }
                title="Drivers">
            </Button>,

            //Corridas
            <Button
                //style= {style.boxPar}
                key={ `races-${season}` }
                onPress={ () => this.props.navigation.navigate('Races', { season: season } ) }
                title="Races">
            </Button>
        );
        return items;
    }

    render() {
        return (
            <SafeAreaView style={ style.container }>
                <ScrollView>
                    <Logo />
                    { this.renderMenu() }
                </ScrollView>
            </SafeAreaView>
        );
    }
}