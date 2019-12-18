//Opcao de terceira tela
//Mostrar dados dos pilotos

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

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
  }

  renderDetails() {
    
    let element = [];

    //Titulo da listagem
    element.push(
      <View>
          <Text>{ this.props.navigation.getParam('detTitle') }</Text>
      </View>
    )

    //Info 1
    element.push(
      <View>
          <Text>
              {this.props.navigation.getParam('detSubjInfo1')}: {this.props.navigation.getParam('detValueInfo1')} 
          </Text>
      </View>
    )

    //Info 2
    element.push(
      <View>
          <Text>
              {this.props.navigation.getParam('detSubjInfo2')}: {this.props.navigation.getParam('detValueInfo2')} 
          </Text>
      </View>
    )

    //Info 3
    element.push(
      <View>
          <Text>
              {this.props.navigation.getParam('detSubjInfo3')}: {this.props.navigation.getParam('detValueInfo3')} 
          </Text>
      </View>
    )

    return element;
  }

  render() {
    return (
      <SafeAreaView style={ style.container }>
          { this.renderDetails() }
      </SafeAreaView>
  );
  }
}