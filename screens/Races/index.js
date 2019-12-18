import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Button, Text, StyleSheet } from 'react-native';
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

export default class Races extends Component {
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
    fetch(`http://ergast.com/api/f1/${season}.json`)
      .then((response) => response.json())
      .then((response) => {
        const races = response.MRData.RaceTable.Races;
        this.setState({ loading: false, data: races });
      })
      .catch(err => console.error(err));

  }

  renderRaces() {
    if (this.state.data.length === 0 ) {
        return null;
    }

    let element = [];

    //Titulo da listagem
    element.push(
        <View>
            <Text>Corridas da Temporada de {this.state.season}</Text> 
        </View>
    )

    //varre retorno da API para mostrar local das corridas da temporada escolhida
    for (let index = 0; index < this.state.data.length; index++) {
        element.push(
            <Button
                key={ `races-${this.state.season}` }
                onPress={ () => this.props.navigation.navigate('Details', 
                  { detTitle: `Grande Prêmio de ${this.state.data[index].Circuit.Location.country} (Temporada de ${this.state.season})`,

                    detSubjInfo1: 'Circuito',
                    detValueInfo1: `${this.state.data[index].Circuit.circuitName}`,

                    detSubjInfo2: 'Data',
                    detValueInfo2: `${this.state.data[index].date}`,

                    detSubjInfo3: 'Cidade',
                    detValueInfo3: `${this.state.data[index].Circuit.Location.locality}`,

                   } ) }
                title={ this.state.data[index].Circuit.Location.country }>
            </Button>            
        )
    }

    this.state.loading = false;
    return element;
  }

  render() {
      return (
          <SafeAreaView style={ style.container }>
              <Loading show={ this.state.loading } color="blue"/>
              { 
                this.renderRaces() 
              }
          </SafeAreaView>
      );
  }
}