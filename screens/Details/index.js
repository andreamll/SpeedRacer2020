//Quarta tela
//Mostrar dados do item selecionado

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native';
import { Text } from 'native-base';

//Estilizacao da tela
import Logo from '../../components/Logo';
import style from '../../components/Styles'

//Renderizacao da tela
export default class Details extends Component {
  componentDidMount() {
    const season = this.props.navigation.getParam('season');
  }

  renderDetails() {
    
    let element = [];

    //Titulo da listagem
    element.push(
      <Text style= {style.mainTitle}>{ this.props.navigation.getParam('detTitle') }</Text>
    )

    //Info 1
    element.push(
      <Text style= {style.detTitle}>{this.props.navigation.getParam('detSubjInfo1')}:</Text>,
      <Text style= {style.bodyTitle}> {this.props.navigation.getParam('detValueInfo1')}</Text>,
      <Text style= {style.detTitle}>&nbsp;</Text>,
    )

    //Info 2
    element.push(
      <Text style= {style.detTitle}>{this.props.navigation.getParam('detSubjInfo2')}:</Text>,
      <Text style= {style.bodyTitle}> {this.props.navigation.getParam('detValueInfo2')}</Text>,
      <Text style= {style.detTitle}>&nbsp;</Text>,
    )

    //Info 3
    element.push(
      <Text style= {style.detTitle}>{this.props.navigation.getParam('detSubjInfo3')}:</Text>,
      <Text style= {style.bodyTitle}> {this.props.navigation.getParam('detValueInfo3')}</Text>,
      <Text style= {style.detTitle}>&nbsp;</Text>,
    )
    return element;

    this.setState({ loading: false});  
  }

  render() {
    return (
      <SafeAreaView style={ style.container }>
          <ScrollView>
            <Logo />            
            { this.renderDetails() }
          </ScrollView>
      </SafeAreaView>
  );
  }
}