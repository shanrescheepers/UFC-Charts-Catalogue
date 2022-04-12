import { ScheduleChart } from '../components/ScheduleChart';
import { TotalFighters } from '../components/TotalFighters';
import { AvgFighterStats } from '../components/AvgFighterStats';
import '../styles/Dashboard.css'
import { NextFightWinLose } from '../components/NextFightWinLose';
import { NextFightStats } from '../components/NextFightStats';
import { FighterStats } from '../components/FighterStats';

export function Dashboard() {
    return (
        <section>
            <FighterStats />
        </section>
    )
}