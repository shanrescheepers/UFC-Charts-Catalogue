import { ScheduleChart } from '../components/ScheduleChart';
import { TotalFighters } from '../components/TotalFighters';
import { AvgFighterStats } from '../components/AvgFighterStats';
import '../styles/Dashboard.css'
import { NextFightWinLose } from '../components/NextFightWinLose';
import { NextFightStats } from '../components/NextFightStats';
import { FighterStats } from '../components/FighterStats';
import '../styles/Dashboard.css'


export function Dashboard() {
    return (
        <section className='section-dash'>

            <div className='welcome-stats-grid'>
                <div>
                    <h1>Welcome to Fight Site!</h1>
                    <p className='p1'>Built for and by fans of the UFC</p>
                    <p className='p2'>See how we've analysed fight, event and fighter data. <br />
                        Go on and hover on the graphs!</p>
                    <div></div>
                </div>

                <div className='total-avg-fighter-stats'>
                    <TotalFighters />
                    <AvgFighterStats />
                </div>

            </div>

            <div className='schedule-stats-grid'>

                <div>

                    <div className='schedule-stats'>
                        <div>
                            <h3>Total Final & Scheduled Fights <br /></h3>
                        </div>
                        <div className='stats'>
                            <ScheduleChart />
                        </div>
                    </div>
                </div>

                <div className='nextfight-stats-grid'>
                    <NextFightWinLose />
                </div>
                <div className='nextfight-bar'>
                    <NextFightStats />
                </div>
            </div>

        </section >
    )
}