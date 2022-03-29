import { FighterComparison } from "../components/FighterComparison"
import { NextFightStats } from "../components/NextFightStats"

export function Comparison() {
    return (
        <div>
            <h1>Next Fight Win Lose Draw Comparison</h1>
            <NextFightStats />
            <h1>Fighter Comparison</h1>
            <FighterComparison />
        </div>
    )
}