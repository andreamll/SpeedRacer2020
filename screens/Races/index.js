//Opcao de terceira tela
//Mostrar dados das corridas

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native';
import { Button, Text } from 'native-base';

//Estilizacao da tela
import Loading from '../../components/Loading';
import Logo from '../../components/Logo';
import style from '../../components/Styles'

//Renderizacao da tela
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
        <Text style= {style.mainTitle} key={ 'races-title' }>Corridas da Temporada de {this.state.season}</Text> 
    )

    //varre retorno da API para mostrar local das corridas da temporada escolhida
    for (let index = 0; index < this.state.data.length; index++) {
      if ( index % 2 == 0) {
        element.push(        
          <Button
              style=  { [style.box, style.boxPar] }
              key={ `races-${this.state.season}-${index}` }
              onPress={ () => this.props.navigation.navigate('Details', 
                { detTitle: `Grande Prêmio de ${this.state.data[index].Circuit.Location.country} (Temporada de ${this.state.season})`,

                  detSubjInfo1: 'Circuito',
                  detValueInfo1: `${this.state.data[index].Circuit.circuitName}`,

                  detSubjInfo2: 'Data',
                  detValueInfo2: `${this.state.data[index].date}`,

                  detSubjInfo3: 'Cidade',
                  detValueInfo3: `${this.state.data[index].Circuit.Location.locality}`,

                } ) }
          >
              <Text style= {style.boxText}>{ this.state.data[index].Circuit.Location.country }</Text>
          </Button>
        )
      } else {
        element.push(
          <Button
              style=  { [style.box, style.boxImpar] }
              key={ `races-${this.state.season}-${index}` }
              onPress={ () => this.props.navigation.navigate('Details', 
                { detTitle: `GP ${this.state.data[index].Circuit.Location.country} (Temporada de ${this.state.season})`,

                  detSubjInfo1: 'Circuito',
                  detValueInfo1: `${this.state.data[index].Circuit.circuitName}`,

                  detSubjInfo2: 'Data',
                  detValueInfo2: `${this.state.data[index].date}`,

                  detSubjInfo3: 'Cidade',
                  detValueInfo3: `${this.state.data[index].Circuit.Location.locality}`,

                  } ) }
          >
                  <Text style= {style.boxText}>{ this.state.data[index].Circuit.Location.country }</Text>
          </Button>            
        )
      }
    }
    return element;

    this.setState({ loading: false});
  }

  render() {
      return (
          <SafeAreaView style={ style.container }>
              <ScrollView>
                <Logo />
                <Loading show={ this.state.loading } color="blue" style={ style.container }/>                
                { this.renderRaces() }
              </ScrollView>
          </SafeAreaView>
      );
  }
}