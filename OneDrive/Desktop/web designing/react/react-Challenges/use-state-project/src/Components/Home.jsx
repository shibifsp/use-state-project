import React, { useState, useRef } from 'react'
import Task from './Task'
import ProgressiveBar from './ProgressiveBar';
import './Css/Home.css';

export default function Home() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const [dataShown, setDataShown] = useState([]);

  const MAX_TASK = 20;

  const startCount = () => {
    if (!intervalRef.current){
      intervalRef.current = setInterval(() => {setCount ((count) => count + 1)},1000)
    }
  }

  const showHide = () => {
    setShow((show) => !show )
  }
  const storeData = (e) => {
    setData(e.target.value)
  }
  const clearInput = () => {
    if(dataShown.length < MAX_TASK){
      if (data.trim()){
        setDataShown(prevData => [...prevData, data]);
        setData("");
      }
    }else {
      alert(`You can only add upto ${MAX_TASK} tasks.`)
    }
   
  }
  const enterPress = (event) => {
    if(event.key === 'Enter') {
      clearInput()
    }
  }

  const progress = (dataShown.length / MAX_TASK) * 100

  return (
    <div className="container">
      <div className='home'>
        <h2>Let's check your typing speed..</h2>
        <span>{Math.trunc(count / 60)} : </span>
        <span>{count % 60}</span>

        <div className="tasks">
          <button 
            className="show"
            onClick={showHide}
          >
            Tasks
          </button>
          {show ? <Task /> : null}
        </div>

        <div className="form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder='Enter the tasks..'
              onFocus={startCount}
              value={data}
              onChange={storeData}
              onKeyDown={enterPress}
            />
          </form>
          <button  className="submit" onClick={clearInput} >
              Submit
          </button>
        </div>

        <ProgressiveBar progress={progress} />

        <ul className="dataShow">
          {dataShown.map((item,index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
   
  )
}
