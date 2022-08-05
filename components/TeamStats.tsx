import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useRecoilValue} from "recoil";
import {numberOfPlayers, valueOfPlayers} from "../atoms/MyTeam";

const TeamStats = () => {
    const noOfPlayers = useRecoilValue(numberOfPlayers);
    const value = useRecoilValue(valueOfPlayers);

    return(
        <View style={styles.container}>
            <View style={styles.playerContainer}>
                <Text style={styles.label}>Players</Text>
                <Text style={styles.value}>{noOfPlayers} / 15</Text>
            </View>
            <View style={styles.budgetsContainer}>
                <Text style={styles.label}>Budget</Text>
                <Text style={styles.value}>${((100000000 - value) / 1000000).toFixed(1)}M</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#38abd1',
        backgroundColor: 'white',
        padding: 10
    },
    playerContainer: {
        marginRight: 25
    },
    budgetsContainer: {

    },
    label: {
        color: '#333'
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default TeamStats;