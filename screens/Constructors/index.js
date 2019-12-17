//Opcao de terceira tela
//Mostrar dados dos construtores

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

export default class Constructors extends Component {
  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.getData(season);
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/constructors.json`)
      .then((response) => response.json())
      .then((response) => {
        const Constructors = response.MRData.ConstructorTable.Constructors;
        this.setState({ loading: false, data: Constructors });
      })
      .catch(err => console.error(err));

  }

  renderConstructors() {
    if (this.state.data.length === 0 ) {
      return null;
    }

    let element = [];
    for (let index = 0; index < this.state.data.length; index++) {
        element.push(
            <View>
                <Text>
                    { this.state.data[index].Name }
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
          { this.renderConstructors() }
      </SafeAreaView>
  );
  }
}