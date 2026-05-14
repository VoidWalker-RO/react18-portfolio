import { Link } from "react-router-dom";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h2>My Portfolio</h2>

      <nav>
        <Link to="/">Про мене</Link>
        <Link to="/my-city">Місто</Link>
        <Link to="/my-future">Майбутнє</Link>
      </nav>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
}