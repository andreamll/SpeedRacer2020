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

export default class Races extends Component {
  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
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
    for (let index = 0; index < this.state.data.length; index++) {
        element.push(
            <View>
                <Text>
                    { this.state.data[index].Circuit.Location.country }
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
          { this.renderRaces() }
      </SafeAreaView>
  );
  }
}