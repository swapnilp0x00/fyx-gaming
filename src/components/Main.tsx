import React, { ChangeEvent, useEffect, useState } from 'react';
import Control from './Control/Control';

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
    let maxBlocksPossible = 0;
    const eachLoadUnload = loadTime + unloadTime;                       // total overhead for each block
    let timer = timeLimit;
    while (timer > 2 * distance) {
      const remainingTime = timer - 2 * distance;                       // total time that can be used for load and unload
      const possibleK = Math.floor(remainingTime / eachLoadUnload);    // maximum possibleK
      const k = Math.min(possibleK, maxBlocksPerBoat);                 // Limit K based on maximum blocks per boat limit
      const kLoadUnload = eachLoadUnload * k;                          
      timer = timer - 2 * distance - kLoadUnload;                     // subtract K overhead + travel time from time.
      maxBlocksPossible += k * maxBoatsInRiver;                       // Multiply K by total number of boats to get final answer
    }
    setFinalResult(maxBlocksPossible);
  };
  const onLoadTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.target.value);
    const newValue = parseInt(event.target.value);
    setLoadTime(newValue);
  };
  const onUnloadTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.target.value);
    const newValue = parseInt(event.target.value);
    setUnloadTime(newValue);
  };
  const onTimeLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.target.value);
    const newValue = parseInt(event.target.value);
    setTimeLimit(newValue);
  };
  const onDistanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.target.value);
    const newValue = parseInt(event.target.value);
    setDistance(newValue);
  };
  const onMaxBoatsInRiverChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setMaxBoatsInRiver(newValue);
  };
  const onMaxBlocksPerBoatChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setMaxBlocksPerBoat(newValue);
  };
  const onTotalBoatsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setTotalBoats(newValue);
  };

  useEffect(() => {
    getResult();
  }, [
    loadTime,
    unloadTime,
    timeLimit,
    distance,
    maxBoatsInRiver,
    maxBlocksPerBoat,
    totalBoats,
  ]);

  return (
    <div className='Main'>
      <div className='controls'>
        <Control
          title='Load Time'
          value={loadTime}
          handler={onLoadTimeChange}
        ></Control>
        <Control
          title='Unload Time'
          value={unloadTime}
          handler={onUnloadTimeChange}
        ></Control>
        <Control
          title='Time Limit'
          value={timeLimit}
          handler={onTimeLimitChange}
        ></Control>
        <Control
          title='Distance'
          value={distance}
          handler={onDistanceChange}
        ></Control>
        <Control
          title='Max Boats In River'
          value={maxBoatsInRiver}
          handler={onMaxBoatsInRiverChange}
        ></Control>
        <Control
          title='Max Blocks per Boat'
          value={maxBlocksPerBoat}
          handler={onMaxBlocksPerBoatChange}
        ></Control>
        <Control
          title='Total Boats'
          value={totalBoats}
          handler={onTotalBoatsChange}
        ></Control>
      </div>
      <div className='answer'>
        <h2>Maximum Total Blocks: {finalResult}</h2>
      </div>
    </div>
  );
}

export default Main;
