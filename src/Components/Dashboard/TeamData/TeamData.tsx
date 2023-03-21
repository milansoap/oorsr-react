
import { useParams } from 'react-router-dom';
import { ResDataTeam } from '../../../Interfaces/ResDataTeam';
import { Team } from '../../../models/Team';
import data from '../../../Test/data.json'

const TeamData= (props: ResDataTeam) => {
  const teams: Team[] = data.teams;

  const { teamId } = useParams();
  const team: Team = teams.find((e) => e.id === parseInt(teamId));

  props = null;

  // IF WE WANT TO USE WITH STATE WE CAN DO props.ID props.NAME

  if (!team) {
    return (
      <div className="container">
        <h1 className="text-center mb-4">Error: Team Not Found</h1>
      </div>
    );
  }


    return (
      <div className="container">
        <h1 className="text-center mb-4">{team.name}</h1>
        <div className="row">
          <div className="col-md-12">
            <h6 className="text-center mb-4">--- Since {team.establishmentYear.toString()} ---</h6>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">{team.director.role}</h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="mb-1">Name: {team.director.name}</p>
                        <p className="mb-1">Surname: {team.director.surname}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-1">Date of Birth: {team.director.dateOfBirth}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamData;
  
  

