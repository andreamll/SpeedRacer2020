//Opcao de terceira tela
//Mostrar dados dos pilotos

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import Loading from '../../components/Loading';

import fonts from '../../fonts';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

(fonts());

export default class Drivers extends Component {
  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.setState({ season: season });
    this.getData(season);
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
      .then((response) => response.json())
      .then((response) => {
        const races = response.MRData.DriverTable.Drivers;
        this.setState({ loading: false, data: races });
      })
      .catch(err => console.error(err));

  }

  renderDrivers() {
    if (this.state.data.length === 0 ) {
        return null;
    }

    let element = [];

    //Titulo da listagem
    element.push(
        <View>
            <Text>Pilotos da Temporada de {this.state.season}</Text> 
        </View>
    )

    //varre retorno da API para mostrar local das corridas da temporada escolhida
    for (let index = 0; index < this.state.data.length; index++) {
        element.push(
            <Button
                key={ `drivers-${this.state.season}` }
                onPress={ () => this.props.navigation.navigate('Details', 
                  { detTitle: `Pilotos da Temporada de ${this.state.season}`,

                    detSubjInfo1: 'Nome Completo',
                    detValueInfo1: `${this.state.data[index].givenName} ${this.state.data[index].familyName}`,

                    detSubjInfo2: 'Data de Nascimento',
                    detValueInfo2: `${this.state.data[index].dateOfBirth}`,

                    detSubjInfo3: 'Nacionalidade',
                    detValueInfo3: `${this.state.data[index].nationality}`,

                   } ) }
                title={ this.state.data[index].givenName + ' ' + this.state.data[index].familyName}>
            </Button>            
        )
    }

    return element;

    this.setState({ loading: false});
  }

  render() {
      return (
          <SafeAreaView style={ style.container }>
            <ScrollView>
              <Loading show={ this.state.loading } color="blue"/>
              { 
                this.renderDrivers() 
              }
            </ScrollView>
          </SafeAreaView>
      );
  }
}