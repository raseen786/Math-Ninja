import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="ninja-title">Welcome to MathNinja 🥷</h1>
      <p className="ninja-subtitle">Sharpen your math skills with tools, puzzles, and ninja challenges!</p>

      <div className="card-grid">
        <Link to="/tools" className="ninja-card">
          <h2>🧰 Tools</h2>
          <p>Quick calculators and math utilities</p>
        </Link>

        <Link to="/puzzles" className="ninja-card">
          <h2>🧠 Puzzles</h2>
          <p>Challenge your brain with math riddles</p>
        </Link>

        <Link to="/tutorials" className="ninja-card">
          <h2>📚 Tutorials</h2>
          <p>Learn math the ninja way</p>
        </Link>

        <Link to="/leaderboard" className="ninja-card">
          <h2>🏆 Leaderboard</h2>
          <p>See top MathNinjas in action</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;