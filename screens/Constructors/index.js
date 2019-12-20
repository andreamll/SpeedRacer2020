//Opcao de terceira tela
//Mostrar dados dos construtores

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native';
import { Button, Text } from 'native-base';

//Estilizacao da tela
import Loading from '../../components/Loading';
import Logo from '../../components/Logo';
import style from '../../components/Styles'

//Renderizacao da tela
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
        const constructors = response.MRData.ConstructorTable.Constructors;
        this.setState({ loading: false, data: constructors });
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
      <Text style= {style.mainTitle} key={ 'constructors-title' }>Construtores da Temporada de {this.state.season}</Text> 
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

                  detSubjInfo3: 'Campeonato',
                  detValueInfo3: `Formule 1`,
                  } ) }
            >
              <Text style= {style.boxText}>{ this.state.data[index].name}</Text>
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

                detSubjInfo3: 'Campeonato',
                detValueInfo3: `Formule 1`,

                } ) }
          >
            <Text style= {style.boxText}>{ this.state.data[index].name}</Text>
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
              { this.renderConstructors() }
            </ScrollView>
        </SafeAreaView>
      );
  }
}