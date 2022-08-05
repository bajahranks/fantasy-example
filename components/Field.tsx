import React from "react";
import {View, Text, ImageBackground} from "react-native";
import {useRecoilValue} from 'recoil';
import {FontAwesome5} from "@expo/vector-icons";
import FieldPlayer from "./FieldPlayer";

// @ts-ignore
import field from '../assets/images/field.jpg';
import {myPlayersByPosition} from "../atoms/MyTeam";

// Object to store players based on position.
/*const players: { [key: string]: null[] } = {
    ATK: [null, null, null],
    MID: [null, null, null],
    DEF: [null, null, null, null],
    GK: [null]
}*/

const Field = () => {
    let i = 0;
    const players = useRecoilValue(myPlayersByPosition);

    return(
        <ImageBackground
            source={field}
            resizeMode={'contain'}
            style={{
                width: '100%',
                aspectRatio: 2 / 3,
                justifyContent: 'space-around',
                alignItems: 'center'
        }}>
            {Object.keys(players).map(position => (
                <View key={position} style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                    {players[position].map(player => (
                        <FieldPlayer key={i++} player={player} position={position}/>
                    ))}
                </View>
            ))}
        </ImageBackground>
    )
};

export default Field;