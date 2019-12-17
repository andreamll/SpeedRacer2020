//Segunda tela
//Para cada temporada escolhida, mostra opcoes de navegacao: Constructors, Drivers, Races

import React from 'react';
import { View } from 'react-native';
import { Button, Text, StyleSheet } from 'native-base';

//const styles = StyleSheet.create({});

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
        <View>{ renderSeasons() }</View>
    );
};

export default Seasons;