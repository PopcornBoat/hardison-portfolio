import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-light shadow-sm fixed-top">
    <nav className="navbar navbar-expand-md navbar-light container">
      <NavLink to="/" className="navbar-brand fw-bold">Hardison Wang</NavLink>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" end>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">Project</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className="nav-link">Resume</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
