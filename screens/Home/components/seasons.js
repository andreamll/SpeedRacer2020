//Primeira tela
//Monta e mostra listagem com as temporadas

import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Text } from 'native-base';

// Listagem das temporadas por ano
const Seasons = (props) => {
    const renderSeasons = () => {
        let items = [];
        for (let i = 0; i < 20; i++) {
            const year = `20${ i > 9 ? i : `0${i}`}`
            items.push(
                <Button
                    key={ `season-${year}` }
                    onPress={ () => props.handleSeason(year) }
                >
                    <Text>{ year }</Text>
                </Button>
            );
        }

        return items;
    }

    return (
        <SafeAreaView>{ renderSeasons() }</SafeAreaView>
    );
};

export default Seasons;