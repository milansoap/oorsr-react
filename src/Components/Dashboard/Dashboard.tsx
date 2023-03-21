import TeamData from "./TeamData/TeamData";
import data from '../../Test/data.json'
import PlayerData from "./PlayerData/PlayerData";
import { Team } from "../../models/Team";
import { Player } from "../../models/Person";
import React from "react";

interface DashboardProps {
  selectedTeam: Team 
}

export default function Dashboard({selectedTeam}: DashboardProps) {
    

  const teams: Team[] = data.teams
  const team: Team = selectedTeam || teams[0]
  const players: Player[] = selectedTeam.players
   

// const myData: ResData = data;

return (
    <div className="containerDashboard">
      <div className="row">
        <div className="col-5">
          <TeamData team={team} />
        </div>
        <div className="col-7">
          <PlayerData players={players} />
        </div>
      </div>
    </div>
  );
  
}