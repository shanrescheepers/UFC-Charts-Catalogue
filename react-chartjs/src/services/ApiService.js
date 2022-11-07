import axios from 'axios';
export async function getSchedule(year) {
    return axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/${year}?key=934fd39d27e24cdfa369b858c723fd88`)
        .then(response => response.data);
}

export async function getEvent(eventId) {
    return await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/EVENT/${eventId}?key=934fd39d27e24cdfa369b858c723fd88`)
        .then(response => response.data);
}

export async function getAllFighters() {
    return await axios.get('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=934fd39d27e24cdfa369b858c723fd88')
        .then(response => response.data);
}

export async function getFighter(fighterId) {
    return await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Fighter/${fighterId}?key=934fd39d27e24cdfa369b858c723fd88`)
        .then(response => response.data);
}

export async function getFight(fightId) {
    return await axios.get(`https://api.sportsdata.io/v3/mma/stats/json/Fight/${fightId}?key=934fd39d27e24cdfa369b858c723fd88`)
        .then(response => response.data);
}