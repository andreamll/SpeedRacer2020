//Opcao de terceira tela
//Mostrar dados dos construtores

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Button, Text, ScrollView } from 'react-native';
import Loading from '../../components/Loading';

//Estilizacao da tela
import style from '../../components/Styles'

export default class Constructors extends Component {
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
    fetch(`http://ergast.com/api/f1/${season}/constructors.json`)
      .then((response) => response.json())
      .then((response) => {
        const races = response.MRData.ConstructorTable.Constructors;
        this.setState({ loading: false, data: races });
      })
      .catch(err => console.error(err));

  }

  renderConstructors() {
    if (this.state.data.length === 0 ) {
        return null;
    }

    let element = [];

    //Titulo da listagem
    element.push(
        <View>
            <Text>Construtores da Temporada de {this.state.season}</Text> 
        </View>
    )

    //varre retorno da API para mostrar local das corridas da temporada escolhida
    for (let index = 0; index < this.state.data.length; index++) {
      if ( index % 2 == 0) {
        element.push(
            <Button
              style= { [style.box, style.boxPar] }
              key={ `Constructors-${this.state.season}-${index}` }
              onPress={ () => this.props.navigation.navigate('Details', 
                { detTitle: `Construtores da Temporada de ${this.state.season}`,

                  detSubjInfo1: 'Construtor',
                  detValueInfo1: `${this.state.data[index].name}`,

                  detSubjInfo2: 'Nacionalidade',
                  detValueInfo2: `${this.state.data[index].nationality}`,

                  detSubjInfo3: 'Link',
                  detValueInfo3: `${this.state.data[index].url}`,

                  } ) }
              title={ this.state.data[index].name}>
            </Button>
        )            
      }
      else {
        element.push(
          <Button
            style= { [style.box, style.boxImpar] }
            key={ `Constructors-${this.state.season}-${index}` }
            onPress={ () => this.props.navigation.navigate('Details', 
              { detTitle: `Construtores da Temporada de ${this.state.season}`,

                detSubjInfo1: 'Construtor',
                detValueInfo1: `${this.state.data[index].name}`,

                detSubjInfo2: 'Nacionalidade',
                detValueInfo2: `${this.state.data[index].nationality}`,

                detSubjInfo3: 'Link',
                detValueInfo3: `${this.state.data[index].url}`,

                } ) }
            title={ this.state.data[index].name}>
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
              <Loading show={ this.state.loading } color="blue"/>
              { 
                this.renderConstructors() 
              }
            </ScrollView>
          </SafeAreaView>
      );
  }
}