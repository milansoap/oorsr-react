import React, { useState } from 'react';
import { Team } from '../../models/Team';


import data from '../../Test/data.json'


function changeTeam(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const liElements = document.querySelectorAll('.list-group-item')
    liElements.forEach(li => li.classList.remove('active'))

    const liElement = (event.currentTarget.parentNode as HTMLElement);
    if (liElement != null) {
        liElement.classList.add('active')
    }


}

interface TeamsListProps {
    handleTeamSelect: (team: Team) => void;
    selectedTeam: Team;
}




const TeamsList = ({ handleTeamSelect, selectedTeam }: TeamsListProps) => {

    const teams: Team[] = data.teams

    return (
        <div className='container'>
            <ul className="list-group">

                {teams.map((team) => (
                    <>

                        <div> {team.name != selectedTeam.name && (
                            <>
                                <li key={team.name} className="list-group-item d-flex justify-content-between align-items-center p-5">
                                    {team.name}
                                    <button onClick={() => { handleTeamSelect(team) }} className="btn btn-primary">
                                        Select
                                    </button>
                                </li>
                            </>

                        )}</div>


                        <div> {team.name == selectedTeam.name && (
                            <>
                                <li key={team.name} className="list-group-item d-flex justify-content-between align-items-center active p-5">
                                    {team.name}
                                    <button onClick={() => { handleTeamSelect(team) }} className="btn btn-light">
                                        Select
                                    </button>
                                </li>
                            </>

                        )}</div>

                    </>
                ))}

            </ul>
        </div>
    );
};

export default TeamsList;



