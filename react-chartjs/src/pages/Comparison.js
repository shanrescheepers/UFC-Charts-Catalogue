import { FighterComparison } from "../components/FighterComparison"
import { NextFightStats } from "../components/NextFightStats"
import { FighterStats } from "../components/AvgFighterStats"

export function Comparison() {
    return (
        <div>
            <h1>Next Fight Win Lose Draw Comparison</h1>
            {/* barchart */}
            <NextFightStats />
            <h1>Fighter Comparison</h1>
            {/* reusable component */}
            {/* radar */}
            <FighterComparison />

            <div>
                <FighterStats />
            </div>
            <div>
                <FighterStats />
            </div>

        </div>
    )
}