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
                    <h1 className='welcome-stats-grid-h1'><span style={{ color: '#D5AB6D' }}>Welcome to</span> Fight Site</h1>
                    <h5 className='p1' style={{ color: '#D5AB6D' }}>Built for and by fans of the UFC</h5>
                    <p className='p2' style={{ color: '#D5AB6D' }}>See how we've analysed fight, event and fighter data. <br />
                        Go on and hover on the graphs!</p>
                    <div>
                        {/* <lottie-player src='https://assets2.lottiefiles.com/private_files/lf30_2iewyzzp.json' speed="1" style="width: 100px; height: 100px;" hover loop controls autoplay></lottie-player> */}
                        <div className='fighter'></div>
                    </div>
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
                            <h3 className='h3'>Total Final & Scheduled Fights <br /></h3>
                        </div>
                        <div className='stats'>
                            <ScheduleChart />
                        </div>
                    </div>
                </div>

                <div className='nextfight-stats-grid'>
                    <p className='upcoming'>Upcoming fight's fighter Stats</p>
                    <NextFightWinLose />
                </div>
                <div className='nextfight-bar'>
                    <p className='upcoming'>Upcoming fight WINS & LOSSES Fighter Stats</p>
                    <NextFightStats />
                </div>
            </div>

        </section >
    )
}