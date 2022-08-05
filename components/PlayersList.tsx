import React from "react";
import {useRecoilState, useRecoilValue} from 'recoil';
import { allPlayersState, filteredPlayers } from "../atoms/Players";
import PlayerListItem from "./PlayerListItem";
import {BottomSheetFlatList} from "@gorhom/bottom-sheet";

const PlayersList = () => {
    // If you need both the value and the setter.
    //const [players, setPlayers] =useRecoilState(allPlayersState);

    // If you need only the setter.
    //const setPlayers = useRecoilValue(allPlayersState);

    // If you need only the value.
    const players = useRecoilValue(filteredPlayers);

    return(
        <BottomSheetFlatList
            data={players}
            renderItem={({ item }) => <PlayerListItem player={item} />}
        />
    )
};

export default PlayersList;