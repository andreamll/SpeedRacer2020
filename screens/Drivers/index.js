//Opcao de terceira tela
//Mostrar dados dos pilotos

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native';
import { Button, Text } from 'native-base';

//Estilizacao da tela
import Loading from '../../components/Loading';
import Logo from '../../components/Logo';
import style from '../../components/Styles'

//Renderizacao da tela
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
        const drivers = response.MRData.DriverTable.Drivers;
        this.setState({ loading: false, data: drivers });
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
      <Text style= {style.mainTitle} key={ 'drivers-title' }>Pilotos da Temporada de {this.state.season}</Text> 
    )

    //varre retorno da API para mostrar pilotos da temporada escolhida
    for (let index = 0; index < this.state.data.length; index++) {
      if ( index % 2 == 0) {
        element.push(        
          <Button
              style=  { [style.box, style.boxPar] }
              key={ `drivers-${this.state.season}-${index}` }
              onPress={ () => this.props.navigation.navigate('Details', 
                { detTitle: `Pilotos da Temporada de ${this.state.season}`,

                  detSubjInfo1: 'Nome Completo',
                  detValueInfo1: `${this.state.data[index].givenName} ${this.state.data[index].familyName}`,

                  detSubjInfo2: 'Data de Nascimento',
                  detValueInfo2: `${this.state.data[index].dateOfBirth}`,

                  detSubjInfo3: 'Nacionalidade',
                  detValueInfo3: `${this.state.data[index].nationality}`,

                  } ) }
            >
              <Text style= {style.boxText}>{ this.state.data[index].givenName + ' ' + this.state.data[index].familyName }</Text>
          </Button>
        )
      } else {
        element.push(
          <Button
            style=  { [style.box, style.boxImpar] }
            key={ `drivers-${this.state.season}-${index}` }
            onPress={ () => this.props.navigation.navigate('Details', 
              { detTitle: `Pilotos da Temporada de ${this.state.season}`,

                detSubjInfo1: 'Nome Completo',
                detValueInfo1: `${this.state.data[index].givenName} ${this.state.data[index].familyName}`,

                detSubjInfo2: 'Data de Nascimento',
                detValueInfo2: `${this.state.data[index].dateOfBirth}`,

                detSubjInfo3: 'Nacionalidade',
                detValueInfo3: `${this.state.data[index].nationality}`,

                } ) }
            >
            <Text style= {style.boxText}>{ this.state.data[index].givenName + ' ' + this.state.data[index].familyName }</Text>
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
              { this.renderDrivers() }
            </ScrollView>
        </SafeAreaView>
      );
  }
}