import React from 'react';
import './Control.css';

function Control(props: { [key: string]: any }) {
  return (
    <div className='Control'>
      <h5> {props.title}: {props.value} </h5>
      <input
        value={props.value}
        onChange={(e) => props.handler(e)}
        type='number'
        min='0'
      ></input>
    </div>
  );
}

export default Control;
