//Opcao de terceira tela
//Mostrar dados dos pilotos

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

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
    this.getData(season);
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/Drivers.json`)
      .then((response) => response.json())
      .then((response) => {
        const Drivers = response.MRData.DriverTable.Drivers;
        this.setState({ loading: false, data: Drivers });
      })
      .catch(err => console.error(err));

  }

  renderDrivers() {
    if (this.state.data.length === 0 ) {
      return null;
    }

    let element = [];
    for (let index = 0; index < this.state.data.length; index++) {
        element.push(
            <View>
                <Text>
                    { this.state.data[index].familyName }
                </Text>
            </View>
        )
    }

    return element;
  }

  render() {
    return (
      <SafeAreaView style={ style.container }>
          <Loading show={ this.state.loading } color="blue"/>
          { this.renderDrivers() }
      </SafeAreaView>
  );
  }
}