import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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




const TeamsList = ({handleTeamSelect, selectedTeam}) => {

    const teams: Team[] = data.teams
    console.log(data.teams)

    return (
        <div className='container'>
            <ul className="list-group">

                {teams.map((team) => (
                    <>

                        {/* <div> { (
                            <>
                                <li key={team.name} className="list-group-item d-flex justify-content-between align-items-center p-5">
                                    {team.name}
                                    <button className="btn btn-primary">
                                        <Link to={'/teams/${team.id}'}> Select </Link>
                                    </button>
                                </li>
                            </>

                        )}</div> */}


                        <div> { (
                            <>
                                <li key={team.id} className="list-group-item d-flex justify-content-between align-items-center active p-5 m-2">
                                    {team.name}
                                    <button onClick={() => { handleTeamSelect(team) }} className="btn btn-light">
                                    <Link to={`/teams/${team.id}`}> Select {team.id} </Link>
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



