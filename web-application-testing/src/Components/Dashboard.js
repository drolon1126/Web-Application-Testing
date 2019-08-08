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
    <button onClick={(e)=>{
      e.preventDefault();
      props.addHit();
    }}>Hit</button>
    <button onClick={(e)=>{
      e.preventDefault();
      props.addRun();
    }}>Run</button>
    </>
  );
}

export default Dashboard;