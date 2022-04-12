import { useEffect, useState } from "react";
import { getAllFighters } from "../services/ApiService";
import '../styles/AvgFighterStats.css'

export function AvgFighterStats() {
    const [fighterStats, setFighterStats] = useState({});

    useEffect(() => {
        getAllFighters().then(fighters => {
            const totalFighters = fighters.length;
            var winTotal = 0;
            var lossTotal = 0;
            var drawTotal = 0;

            fighters.forEach(fighter => {
                //+= is n incrementer basies
                //winTotal is gelyk aan allfighters.wins ?(shortif) wintotal gelyk aan fighter.wins :(else) se net, wintotal += 0, omdat data waarde "Null" of "Scrambled" is
                //value = statement ? statement true : statement false

                winTotal = winTotal + fighter.Wins;
                lossTotal = lossTotal + fighter.Losses;
                drawTotal = drawTotal + fighter.Draws;
            });

            setFighterStats({
                avgWins: Math.round(winTotal / totalFighters * 100) / 100,
                avgLosses: Math.round(lossTotal / totalFighters * 100) / 100,
                avgDraws: Math.round(drawTotal / totalFighters * 100) / 100
            })
        })
    }, [])

    return (
        <div className="stats-grid">
            <div>
                <p>Average Wins</p>
                <h1>{fighterStats.avgWins}</h1>
            </div>
            <div>
                <p>Average Draws</p>
                <h1>{fighterStats.avgDraws}</h1>
            </div>
            <div>
                <p>Average Losses</p>
                <h1>{fighterStats.avgLosses}</h1>
            </div>
        </div>
    )
}