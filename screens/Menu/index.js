//Segunda tela
//Para cada temporada escolhida, mostra opcoes de navegacao: Constructors, Drivers, Races

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native';
import { Button, Text } from 'native-base';

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
                style=  { [style.box, style.boxImpar] }
                key={ `constructors-${season}` }
                onPress={ () => this.props.navigation.navigate('Constructors', { season: season } ) }
            >
                <Text style= {style.boxText}>Construtores</Text>
            </Button>,

            //Pilotos
            <Button
                style=  { [style.box, style.boxPar] }
                key={ `drivers-${season}` }
                onPress={ () => this.props.navigation.navigate('Drivers', { season: season } ) }
            >
                <Text style= {style.boxText}>Pilotos</Text>
            </Button>,

            //Corridas
            <Button
                style=  { [style.box, style.boxImpar] }
                key={ `races-${season}` }
                onPress={ () => this.props.navigation.navigate('Races', { season: season } ) }
            >
                <Text style= {style.boxText}>Corridas</Text>
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
