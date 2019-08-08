import React from 'react';

const Dashboard = props => {
  return (
    <>
    <button onClick={(e)=>{
      e.preventDefault();
      props.addBall();
    }}>Add Ball</button>
    <button onClick={(e)=>{
      e.preventDefault();
      props.addFoul();
    }}>Add Foul</button>
    <button onClick={(e)=>{
      e.preventDefault();
      props.addStrike();
    }}>Add Strike</button>
    <button onClick={(e)=>{
      e.preventDefault();
      props.addOut();
    }}>Add Out</button>
    </>
  );
}

export default Dashboard;