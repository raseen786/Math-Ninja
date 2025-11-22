import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Tools from './components/tools/Tools';
import PercentageCalculator from './components/tools/PercentageCalculator';
import './styles/ninjaTheme.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/percentage" element={<PercentageCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;