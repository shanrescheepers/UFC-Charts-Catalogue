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
        <section>
            <h1>This is ma dashboard</h1>
            <div className='welcome-stats-grid'>
                <div>
                    <h1>Welcome to Fight Site!</h1>
                    <p>ofihwe weoi weorfih oi hweroih weroh wero hweorh weorh</p>
                </div>
                <div>
                    <TotalFighters />
                    <AvgFighterStats />
                </div>
            </div>
            <NextFightWinLose />
            <NextFightStats />
            <ScheduleChart />
        </section>
    )
}