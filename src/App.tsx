import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Functionary, Player } from './models/Person';
import data from './Test/data.json'
import Dashboard from './Components/Dashboard/Dashboard';
import { Team } from './models/Team';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamsList from './Components/TeamsList/TeamsList';



const defaultTeam: Team = data.teams[0]
function App() {

const teams = data.teams;
const [selectedTeam, setSelectedTeam] = useState<Team>(data.teams[0])
const handleTeamSelect = (team: Team) => {
  setSelectedTeam(team)
}

  return (
    <Router>
      <React.Fragment>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path='/' element={<Dashboard selectedTeam={selectedTeam} />}></Route>
          <Route path='/teams' element={<TeamsList handleTeamSelect={handleTeamSelect} selectedTeam={selectedTeam} />} />
        </Routes>
        <Footer />

      </React.Fragment>
    </Router>


  );
}



export default App;
