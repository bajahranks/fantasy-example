import {atom, selector} from "recoil";
import {Player, Positions} from '../types';

const positions = ['FWD', 'MID', 'DEF', 'GK'] as Positions[];

// think of atoms as the state.
export const myPlayersState = atom({
    key: "myPlayersState",
    default: [] as Player[],
});

export const myFormationState = atom({
    key: "myFormation",
    default: {
        FWD: 3,
        MID: 3,
        DEF: 4,
        GK: 1
    }
});

// think of selectors as filters associated with the state.
export const myPlayersByPosition = selector({
    key: "myPlayersByPosition",
    get: ({ get }) => {
        const players = get(myPlayersState);
        const formation =get(myFormationState);

        const groupedPlayers = {};

        // Get players based on their position.
        positions.forEach((position) => {
            groupedPlayers[position] = players.filter(p => p.position === position);

            // Fill with null values, up to the amount of expected players from formation.
            for (let i = groupedPlayers[position].length; i < formation[position]; i++) {
                groupedPlayers[position].push(null);
            }
        })

        return groupedPlayers;
    }
});

export const numberOfPlayers = selector({
    key: 'numberOfPlayers',
    get: ({ get }) => {
        return get(myPlayersState).length;
    }
});

export const valueOfPlayers = selector({
    key: 'valueOfPlayers',
    get: ({ get }) => {
        return get(myPlayersState).reduce((acc, player) => acc + player.price, 0);
    }
});