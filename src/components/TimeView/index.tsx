import { DateTime } from "luxon";
import styled from "./styled.module.css";
import { useState, useEffect } from 'react';

// import alarmSound from './alarm.mp3';

export function TimeView() {
  const getCurrentTime = () => {
    const currentTime = DateTime.now().setZone('America/Sao_Paulo');
    const formattedTime = currentTime.toFormat('dd LLL, HH:mm');
    const seconds = currentTime.toFormat("ss's'");
  
    return [formattedTime, seconds];
  };

  const [ now, setNow ] = useState(getCurrentTime())
  
  setInterval(() => {
    setNow(getCurrentTime())
  }, 1000)
  
  return (
    <div className={styled['time-view']}>
      <div className={styled.time}>
        <h1>{now[0]}</h1>
        <span>{now[1]}</span>
      </div>
      <Timer duration={15}/>
    </div>
  );
}

export function Timer({ duration }: {duration: number}) {
  const [timeLeft, setTimeLeft] = useState(duration);
  
  useEffect(()=> {
    if (timeLeft === 0) {
      // const audio = new Audio(alarmSound);
      // audio.play();
      alert('TIME IS UP');
    } else {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft])

  const startTimer = () => {
    
  }

  const formatTime = ( time: number ) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <button onClick={startTimer} >Start timer</button>
      <h1>{formatTime(timeLeft)}</h1>
    </div>
  );
}