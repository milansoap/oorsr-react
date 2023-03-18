
import { ResDataTeam } from '../../../Interfaces/ResDataTeam';

const TeamData= (props: ResDataTeam) => {
    return (
      <div className="container">
        <h1 className="text-center mb-4">{props.team.name}</h1>
        <div className="row">
          <div className="col-md-12">
            <h6 className="text-center mb-4">--- Since {props.team.establishmentYear.toString()} ---</h6>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">{props.team.director.role}</h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="mb-1">Name: {props.team.director.name}</p>
                        <p className="mb-1">Surname: {props.team.director.surname}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-1">Date of Birth: {props.team.director.dateOfBirth}</p>
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
  
  

