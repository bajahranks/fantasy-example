import {atom, selector} from "recoil";
import players from '../assets/data/players';
import response from "../assets/data/response.json";

const pos2pos = {
    Attacker: 'FWD',
    Defender: 'DEF',
    Midfielder: 'MID',
    Goalkeeper: 'GCK'
}

export const allPlayersState = selector({
    key: "allPlayersState",
    get: async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '71425ff79dmsh18f6bc25700b953p17b370jsn1fc334c1ef83',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        fetch('https://api-football-v1.p.rapidapi.com/v3/players?league=4&season=2020', options)
            .then(response => response.json())
            .then(response => response.response.map(entry => ({
                id: entry.player.id,
                name: entry.player.name,
                match: 'SOS v. ZCC',
                price: 11300000,
                position: pos2pos[entry.statistics[0].games.position],
                totalPoints: 29
            })))
            .catch(err => console.error(err));


    }
});

export const positionFilterState = atom({
    key: "positionFilterState",
    default: [] as string[]
});

export const filteredPlayers = selector({
    key: "filteredPlayers",
    get: ({ get }) => {
        const players = get(allPlayersState);
        const filters = get(positionFilterState);
        // return all players otherwise return all players of a particular position
        return players.filter(player => filters.length === 0 || filters.includes(player.position))
    }
})