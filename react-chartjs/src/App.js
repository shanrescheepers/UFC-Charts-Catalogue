import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Timeline } from './pages/Timeline';
import { Comparison } from './pages/Comparison';
import { HeaderNav } from './components/HeaderNav';

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
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </div>
  );
}

export default App;
