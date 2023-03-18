import React from 'react';
import { Team } from '../../models/Team';
import { Link } from "react-router-dom";
import TeamsList from '../TeamsList/TeamsList';


interface HeaderProps {
  teams: Team[];
}

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light m-3">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link to="/" className="nav-link" > Dashboard <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
            <Link to="/teams" className="nav-link" > Teams <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
