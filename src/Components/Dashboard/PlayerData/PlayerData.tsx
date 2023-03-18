
import React from 'react';
import { ResDataPlayers } from '../../../Interfaces/ResDataPlayers';
import Info from '../../Info/Info';
import Warning from '../../Warning/Warning';


const PlayerData = (props: ResDataPlayers) => {

    return (
        <div className='container'>
            <div>
                <h1 className="d-flex justify-content-center"> PLAYERS LIST </h1>

            </div>

            <div className="d-flex justify-content-around">
                <div className="p-2">Name</div>
                <div className="p-2">Surname</div>
                <div className="p-2">Height</div>
                <div className="p-2">Weight</div>
                <div className="p-2">Date Of Birth</div>
                <div className="p-2">Injured</div>

            </div>
            <hr />


            {props.players.map((player) => (
                <div key={player.name}>

                    <div className="d-flex justify-content-around">
                        <div className="p-2">{player.name}</div>
                        <div className="p-2">{player.surname}</div>
                        <div className="p-2">{player.height}</div>
                        <div className="p-2">{player.weight}</div>
                        <div className="p-2">{player.dateOfBirth}</div>
                        <div className="p-2">{player.injured.toString()}</div>

                    </div>
                    <hr />
                </div>
            ))}

            <div>
            <div> {props.players.length >2 && <Info/>}</div>
            <div> {props.players.length >= 10 && <Info/>}</div>
            </div>



        </div>
       


    );
};

export default PlayerData;
