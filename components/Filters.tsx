import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import {useRecoilState} from 'recoil';
import {positionFilterState} from "../atoms/Players";

const positions = ['FWD', 'MID', 'DEF', 'GK'];

const Filters = () => {
    const [positionFilter, setPositionFilter] = useRecoilState(positionFilterState);
    console.log(positionFilter)
    const onFilterPress = (position: string) => {
        //console.warn(position);
        setPositionFilter((curPositionFilter) => {
            // If position already exist remove it otherwise add it.
            if (curPositionFilter.includes(position)) {
                return curPositionFilter.filter(pos => pos !== position);
            } else {
                return [...curPositionFilter, position];
            }
        });
    }

    const isSelected = (position: string) => {
        return positionFilter.includes(position);
    }

    return(
        <View style={styles.container}>
            {positions.map((position: string) => (
                <Pressable onPress={() => onFilterPress(position)}
                           style={[styles.filterContainer, {backgroundColor: isSelected(position) ? 'purple' : '#ddd'}]}
                           key={position}
                >
                    <Text style={styles.text}>{position}</Text>
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    filterContainer: {
        backgroundColor: '#ddd',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {

    }
});

export default Filters;