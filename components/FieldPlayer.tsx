import React from "react";
import {View, Text, ImageBackground} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
// @ts-ignore
import field from '../assets/images/field.jpg';

type FieldPlayerProps = {
    player: null,
    position: string,
}

const FieldPlayer = ({player, position}: FieldPlayerProps) => {
    return(
        <View style={{alignItems: 'center'}}>
            <FontAwesome5 name={'tshirt'} size={35} color={player ? '#d170db' : '#5c5c5cbb'}/>
            <Text style={{
                backgroundColor: '#333333bb',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 12,
                padding: 2,
                paddingHorizontal: 7
            }}>
                {player ? player.name : position}
            </Text>
        </View>
    )
};

export default FieldPlayer;