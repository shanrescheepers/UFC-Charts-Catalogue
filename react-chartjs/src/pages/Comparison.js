import { FighterStats } from "../components/FighterStats"
import '../styles/Comparison.css';
import fighter1 from '../images/fighter_compare_1.svg'
import fighter2 from '../images/fighter_compare_2.svg'
import Lottie from 'react-lottie';
import * as animationData from '../lottie/vs.json'

export function Comparison() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <section>
            <Lottie options={defaultOptions}
                // height={500}
                // width={100}
                style={{ "width": "80%", "height": "500px" }}
                isStopped={false}
                isPaused={false} />
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