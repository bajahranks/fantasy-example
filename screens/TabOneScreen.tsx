import React, {useRef, Suspense} from 'react';
import {SafeAreaView, StyleSheet, Pressable, Text, View} from 'react-native';
import Field from '../components/Field';
import TeamStats from "../components/TeamStats";
import BottomSheet from '@gorhom/bottom-sheet';
import PlayersList from "../components/PlayersList";
import Filters from "../components/Filters";


const TabOneScreen = () => {
    const playerBottomSheet = useRef<BottomSheet>(null);
    const filterBottomSheet = useRef<BottomSheet>(null);

    const viewPlayers = () => {
        playerBottomSheet.current?.expand();
    }

    const openFilter = () => {
        filterBottomSheet.current?.expand();
    }

    // Sections of the screen bottomsheet would show.
    const snapPoints = [0, '50%'];

    return (
        <SafeAreaView style={styles.container}>
            <TeamStats />
            <Field />
            <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
                <Text>View Players</Text>
            </Pressable>
            <BottomSheet ref={playerBottomSheet} index={0} snapPoints={snapPoints}>
                <Pressable onPress={openFilter} style={styles.buttonContainer}>
                    <Text>Filters</Text>
                </Pressable>
                <Suspense fallback={<Text>Loading</Text>}>
                    <PlayersList />
                </Suspense>
            </BottomSheet>
            <BottomSheet ref={filterBottomSheet} index={0} snapPoints={snapPoints}>
                <Filters />
            </BottomSheet>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#72cc5e'
    },
    buttonContainer: {
        backgroundColor: 'orange',
        width: '90%',
        margin: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 'auto'
    },
    backButton: {
        backgroundColor: 'orange',
        width: '90%',
        margin: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 50
    }
});
/*
* <Pressable onPress={viewPlayers} style={styles.backButton}>
                    <Text>Back</Text>
                </Pressable>
* */
export default TabOneScreen;