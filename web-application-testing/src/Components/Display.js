import React, {useState, useEffect} from 'react';
import Dashboard from './Dashboard';

const Display = props => {
  const [balls,setBalls] = useState(0);
  const [strikes,setStrikes] = useState(0);
  const [outs,setOuts] = useState(0);
  const [runsHome,setRunsHome] = useState(0);
  const [runsAway,setRunsAway] = useState(0);
  const [inning,setInning] = useState(1);
  const [bottomOrTop, setBottomOrTop] = useState(0); //0 is the top half of the inning 1 is the bottom
  const [inningHalf, setInningHalf] = useState(<p>Top</p>);

  const resetCount = () => {
    setBalls(0);
    setStrikes(0);
  }

  const changeHalf = () =>{
    if(bottomOrTop===0){
      setBottomOrTop(1)
    } else {
      setBottomOrTop(0);
      setInning(inning+1);
    }
  }

  const addOut = () =>{
    resetCount();
    if(outs<2){
      setOuts(outs+1)
    } else if(outs===2){
      setOuts(0);
      changeHalf();
    }
  }

  const addBall = () => {
    if(balls<3){
      setBalls(balls+1);
    } else {
      resetCount();
    }
  }

  const addStrike = () => {
    if(strikes<2){
      setStrikes(strikes+1);
    }else {
      addOut();
    }
  }

  const addFoul = () => {
    if(strikes<2){
      addStrike();
    }
  }

  const addRun = () => {
    if(bottomOrTop === 0){
      setRunsHome(runsHome+1);
    } else {
      setRunsAway(runsAway+1);
    }
  }

  useEffect(()=>{
    if(bottomOrTop===0){
      setInningHalf(<p>Top</p>);
    } else{
      setInningHalf(<p>Bottom</p>);
    }
  },[bottomOrTop]);

  return (
    <div className='scoreboard'>
      <div className='score'>
        <div className='home scoreDisp'>
          <h2>Home</h2>
          <p>{runsHome}</p>
        </div>
        <div className='inning scoreDisp'>
          {inningHalf}
          <p>{inning}</p>
          <h2>Inning</h2>
        </div>
        <div className='away  scoreDisp'>
          <h2>Away</h2>
          <p>{runsAway}</p>
        </div>
      </div>
      <div className='count'>
        <div className='balls scoreDisp'>
          <h3>Balls:</h3>
          <p>{balls}</p>
        </div>
        <div className='strikes scoreDisp'>
          <h3>Strikes:</h3>
          <p>{strikes}</p>
        </div>
        <div className='outs scoreDisp'>
          <h3>Outs:</h3>
          <p>{outs}</p>
        </div>
      </div>
      <Dashboard addOut={addOut} addFoul={addFoul} addStrike={addStrike} addBall={addBall} addHit={resetCount} addRun={addRun}/>
    </div>
  );
}

export default Display;