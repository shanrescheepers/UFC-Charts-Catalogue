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
import { Timeline } from './pages/Timeline';
import { Dashboard } from './pages/Dashboard';
import { Comparison } from './pages/Comparison';
import { HeaderNav } from './components/HeaderNav';
import { Nav } from 'react-bootstrap';







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
      <section>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
