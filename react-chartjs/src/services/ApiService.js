export async function getSchedule(year) {
    return await fetch(`https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/${year}?key=0d7764cec6ff4982b6257b85ab293701`)
        .then(data => data.json())
}

export async function getEvent(eventId) {
    return await fetch(`https://api.sportsdata.io/v3/mma/scores/json/EVENT/${eventId}?key=0d7764cec6ff4982b6257b85ab293701`)
        .then(data => data.json())
}

export async function getFight(fightId) {
    return await fetch(`https://api.sportsdata.io/v3/mma/stats/json/Fight/${fightId}?key=0d7764cec6ff4982b6257b85ab293701`)
        .then(data => data.json())
}

export async function getFighter(fighterId) {
    return await fetch(`https://api.sportsdata.io/v3/mma/scores/json/Fighter/${fighterId}?key=0d7764cec6ff4982b6257b85ab293701`)
        .then(data => data.json())
}

export async function getAllFighters() {
    return await fetch('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=0d7764cec6ff4982b6257b85ab293701')
        .then(data => data.json())
}