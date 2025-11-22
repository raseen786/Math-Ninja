import { useState } from 'react';
import '../../styles/percentageCalculator.css';

function PercentageCalculator() {
  const [value, setValue] = useState('');
  const [percent, setPercent] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const val = parseFloat(value);
    const pct = parseFloat(percent);
    if (!isNaN(val) && !isNaN(pct)) {
      setResult(((pct / 100) * val).toFixed(2));
    } else {
      setResult('Please enter valid numbers.');
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="ninja-title">📊 Percentage Ninja</h1>
      <p className="ninja-subtitle">Slice through numbers with ninja precision!</p>

      <div className="calculator-card">
        <input
          type="number"
          placeholder="Value (Y)"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Percentage (X)"
          value={percent}
          onChange={e => setPercent(e.target.value)}
        />
        <button onClick={calculate}>Calculate</button>
        {result && <p className="ninja-result">Result: {result}</p>}
      </div>
    </div>
  );
}

export default PercentageCalculator;