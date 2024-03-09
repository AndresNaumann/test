import React from 'react';
import logo from './logo.svg';
import './App.css';
import ncaa from './CollegeBasketballTeams.json';

interface Teams {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const collegeTeams = ncaa['teams'];

class Team extends React.Component<Teams> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="center-container">
        <div className="card">
          <img />
          <h1>{oneTeam.school}</h1>
          <h2>Mascot: {oneTeam.name}</h2>
          <h2>
            Location: {oneTeam.city}, {oneTeam.state}
          </h2>
        </div>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {collegeTeams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function Heading() {
  return (
    <div className="card-heading">
      <h1>This website is a list of colleges in NCAA Basketball</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
