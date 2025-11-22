import { Link } from 'react-router-dom';
import '../../styles/tools.css';

function Tools() {
  return (
    <div className="tools-container">
      <h1 className="ninja-title">🧰 MathNinja Tools Dojo</h1>
      <p className="ninja-subtitle">Choose your weapon, young ninja!</p>

      <div className="card-grid">
        <Link to="/tools/percentage" className="ninja-card">
          <h2>📊 Percentage Calculator</h2>
          <p>Find percentages, increases, and decreases</p>
        </Link>

        <Link to="/tools/fraction-simplifier" className="ninja-card">
          <h2>➗ Fraction Simplifier</h2>
          <p>Simplify fractions like a pro</p>
        </Link>

        <Link to="/tools/equation-solver" className="ninja-card">
          <h2>🧮 Equation Solver</h2>
          <p>Solve linear equations instantly</p>
        </Link>

        <Link to="/tools/unit-converter" className="ninja-card">
          <h2>📐 Unit Converter</h2>
          <p>Convert between units with ninja speed</p>
        </Link>
      </div>
    </div>
  );
}

export default Tools;