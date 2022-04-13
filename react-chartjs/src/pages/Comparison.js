import { FighterStats } from "../components/FighterStats"
import '../styles/Comparison.css';
import fighter1 from '../images/fighter_compare_1.svg'
import fighter2 from '../images/fighter_compare_2.svg'

export function Comparison() {
    return (
        <section>
            <div >
                <h1 className="compare-fighters">Compare two fighters!</h1>
                <div className="fighter-stat-grid">
                    <FighterStats fighterImg={fighter1} />
                    <FighterStats fighterImg={fighter2} />
                </div>
            </div>
        </section>
    )
}