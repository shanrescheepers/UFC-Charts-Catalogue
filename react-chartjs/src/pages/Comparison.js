import { FighterStats } from "../components/FighterStats"
import '../styles/Comparison.css';
import fighter1 from '../images/fighter_compare_1.svg'
import fighter2 from '../images/fighter_compare_2.svg'
import Lottie from 'react-lottie';
import * as animationData from '../lottie/vs.json'

export function Comparison() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <section>

            <div >
                <h1 className="compare-fighters">Compare two fighters!</h1>
                <div className="lottie">
                    <Lottie options={defaultOptions}
                        // height={500}
                        // width={100}
                        style={{ "width": "200px", "height": "200px" }}
                        isStopped={false}
                        isPaused={false} />
                </div>
                <div className="fighter-stat-grid">
                    <FighterStats fighterImg={fighter1} />
                    <FighterStats fighterImg={fighter2} />
                </div>
            </div>
        </section>
    )
}