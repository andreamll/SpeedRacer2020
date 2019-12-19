//Primeira tela
//Monta e mostra listagem com as temporadas

import React from 'react';
import { View} from 'react-native';
import { Button, Text } from 'native-base';

//Estilizacao da tela
import style from '../../../components/Styles'

// Listagem das temporadas por ano
const Seasons = (props) => {
    const renderSeasons = () => {
        let items = [];
        for (let index = 0; index < 20; index++) {
            const year = `20${ index > 9 ? index : `0${index}`}`
            if ( index % 2 == 0) {
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