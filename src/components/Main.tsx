import React, { ChangeEvent, useEffect, useState } from 'react';

import './Main.css';

function Main() {
  const [loadTime, setLoadTime] = useState(1);
  const [unloadTime, setUnloadTime] = useState(2);
  const [distance, setDistance] = useState(10);
  const [timeLimit, setTimeLimit] = useState(120);
  const [maxBlocksPerBoat, setMaxBlocksPerBoat] = useState(6);
  const [maxBoatsInRiver, setMaxBoatsInRiver] = useState(2);
  const [totalBoats, setTotalBoats] = useState(20);
  const [finalResult, setFinalResult] = useState(0);
  
  // Actual logic and computation of answers 
  const getResult = () => {
    let maxBlocksPossible = 0
    const eachLoadUnload = loadTime + unloadTime;
    let timer = timeLimit;
    while (timer > 2 * distance) {
      const remainingTime = timer - (2 * distance);
      console.log('remainingTime', remainingTime);
      const possibleK = Math.floor(remainingTime / eachLoadUnload);
      console.log('possibleK', possibleK);
      const k = Math.min(possibleK, maxBlocksPerBoat);
      console.log('K', k);
      const kLoadUnload = eachLoadUnload * k;
      console.log('KLoadUnload', kLoadUnload);
      timer = timer - 2*distance - kLoadUnload;
      console.log('timer', timer);
      maxBlocksPossible += k * maxBoatsInRiver;
      console.log('maxBlocksPossible', maxBlocksPossible);
    }
    setFinalResult(maxBlocksPossible);
  }
  const onLoadTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.target.value)
    const newValue = parseInt(event.target.value);
    setLoadTime(newValue);
  }
  const onUnloadTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.target.value)
    const newValue = parseInt(event.target.value);
    setUnloadTime(newValue);
  }
  const onTimeLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.target.value)
    const newValue = parseInt(event.target.value);
    setTimeLimit(newValue);
  }
  const onDistanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.target.value)
    const newValue = parseInt(event.target.value);
    setDistance(newValue);
  }
  const onMaxBoatsInRiverChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setMaxBoatsInRiver(newValue);
  }
  const onMaxBlocksPerBoatChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setMaxBlocksPerBoat(newValue);
  }
  const onTotalBoatsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setTotalBoats(newValue);
  }

  useEffect(() => {
    getResult();
  }, [loadTime, unloadTime, timeLimit, distance, maxBoatsInRiver, maxBlocksPerBoat, totalBoats, getResult])

  return (
    <div className="Main">
      <p>Load Time: {loadTime}</p>
      <input value={loadTime} onChange={(e) => onLoadTimeChange(e)} type="number" min="0"></input>
      <p>Unload Time: {unloadTime}</p>
      <input value={unloadTime} onChange={(e) => onUnloadTimeChange(e)} type="number" min="0"></input>
      <p>Time Limit: {timeLimit}</p>
      <input value={timeLimit} onChange={(e) => onTimeLimitChange(e)} type="number" min="0"></input>
      <p>Distance: {distance}</p>
      <input value={distance} onChange={(e) => onDistanceChange(e)} type="number" min="0"></input>
      <p>Max Boats In River: {maxBoatsInRiver}</p>
      <input value={maxBoatsInRiver} onChange={(e) => onMaxBoatsInRiverChange(e)} type="number" min="0"></input>
      <p>Max Blocks per Boat: {maxBlocksPerBoat}</p>
      <input value={maxBlocksPerBoat} onChange={(e) => onMaxBlocksPerBoatChange(e)} type="number" min="0"></input>
      <p>Total Boats: {totalBoats}</p>
      <input value={totalBoats} onChange={(e) => onTotalBoatsChange(e)} type="number" min="0"></input>
      <div>{finalResult}</div>
      <button onClick={getResult}>Get Result</button>
    </div>
  );
}

export default Main;
