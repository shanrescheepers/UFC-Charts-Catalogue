import { ScheduleChart } from '../components/ScheduleChart';
import { TotalFighters } from '../components/TotalFighters';
import { AvgFighterStats, FighterStats } from '../components/AvgFighterStats';
import '../styles/Dashboard.css'

export function Dashboard() {
    return (

        <div className="header-container">
            <div className="row-one">
                <h1 className="component-one-introduction-h1">A site for fans of the UFC<br></br>& MMA around the world</h1>
            </div>
            <div className="row-two">
                <p className="totalfighters">TOTAL FIGHTERS</p><hr></hr>
            </div>


            <div className='dash-container'>
                <div className='welcome'><h1 className='app-landing-msg'>Welcome to Fight Site!</h1></div>
                <div>
                    <TotalFighters />
                </div>
                <div>
                    <ScheduleChart />
                </div>
            </div>
        </div>









        /* <div className='fighterstats-div'>
                    <FighterStats />
                </div> */


    )
}