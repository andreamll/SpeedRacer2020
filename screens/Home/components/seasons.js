//Primeira tela
//Monta e mostra listagem com as temporadas

import React from 'react';
import { StyleSheet , Dimensions, View} from 'react-native';
import { Button, Text } from 'native-base';

//Estilizacao da tela
var { height } = Dimensions.get('window');
 
var box_count = 10;
var box_height = height / box_count;

const style = StyleSheet.create({
  box: {
    height: box_height
  },
  boxImpar: {
    backgroundColor: '#2196F3'
  },
  boxPar: {
    //backgroundColor: '#8BC34A'
  } 
});

// Listagem das temporadas por ano
const Seasons = (props) => {
    const renderSeasons = () => {
        let items = [];
        for (let i = 0; i < 20; i++) {
            const year = `20${ i > 9 ? i : `0${i}`}`
            if ( i % 2 == 0) {
                items.push(
                    <Button                   
                        style= { [style.box, style.boxPar] }
                        key={ `season-${year}` }
                        onPress={ () => props.handleSeason(year) }
                    >
                        <Text>Temporada de { year }</Text>
                </Button>
                );
            }
            else {
                items.push(
                    <Button                   
                        style= { [style.box, style.boxImpar] }
                        key={ `season-${year}` }
                        onPress={ () => props.handleSeason(year) }
                    >
                        <Text>Temporada de { year }</Text>
                </Button>
                );
            }
                    
        }

        return items;
    }

    return (
        <View>{ renderSeasons() }</View>
    );
};

export default Seasons;