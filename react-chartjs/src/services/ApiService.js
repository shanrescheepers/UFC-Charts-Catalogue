import axios from 'axios';

export async function getSchedule(year) {
    return axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/${year}?key=0d7764cec6ff4982b6257b85ab293701`)
        .then(response => response.data);
}

export async function getEvent(eventId) {
    return await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/EVENT/${eventId}?key=0d7764cec6ff4982b6257b85ab293701`)
        .then(response => response.data);
}

export async function getAllFighters() {
    return await axios.get('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=0d7764cec6ff4982b6257b85ab293701')
        .then(response => response.data);
}

export async function getFighter(fighterId) {
    return await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Fighter/${fighterId}?key=0d7764cec6ff4982b6257b85ab293701`)
        .then(response => response.data);
}

export async function getFight(fightId) {
    return await axios.get(`https://api.sportsdata.io/v3/mma/stats/json/Fight/${fightId}?key=0d7764cec6ff4982b6257b85ab293701`)
        .then(response => response.data);
}