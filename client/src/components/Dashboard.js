import React from "react";
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return <div style={{width:'100%'}}><Link to="/games/new">Start New Game</Link></div>;
};

export default Dashboard;
