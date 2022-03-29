import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";
import { React } from "react";
import { ScheduleChart } from './components/ScheduleChart';
import { TotalFighters } from './components/TotalFighters';
import { AvgFighterStats } from './components/AvgFighterStats';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <div className="App">
      <AvgFighterStats />
    </div>
  );
}

export default App;
