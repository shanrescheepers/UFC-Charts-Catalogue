import { ScheduleChart } from '../components/ScheduleChart';
import { TotalFighters } from '../components/TotalFighters';
import { AvgFighterStats } from '../components/AvgFighterStats';
import '../styles/Dashboard.css'

export function Dashboard() {
    return (
        <section>

            <TotalFighters />


            <ScheduleChart />


            <AvgFighterStats />
        </section>
    )
}