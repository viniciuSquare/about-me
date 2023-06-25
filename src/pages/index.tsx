import { Inter } from "next/font/google";
import { SideBar } from "@/components/System/SideBar";

import styled from "@/styles/index.module.css";
import { UnsplashImage } from "@/components/UnsplashBackground";
import { Eye, EyeClosed, PushPin } from "phosphor-react";
import { useState } from "react"
import { TasksList } from "@/modules/tasks/components/TasksList";


export default function Home() {
  return (
    <main className={styled.main}>
      <SideBar />
      <div 
        className={`${styled.content} bg-slate-50`}
      >
        <DaysList/>
        <div id="current-session">
          <div id="current-session-header" className="flex items-center justify-between">
            <span>Today</span>
            <span>3 events</span>
            <TasksList/>
          </div>
        </div>
        <div id="alerts"
          className="wrapper"
        >
          <span >3 alerts</span>
          <div className="alert-wrapper wrapper">
            <span>Verify morning routine</span>
            <span>Write on yestarday</span>
            <span>Write about today, what will we accomplish?!</span>
          </div>
        </div>
      </div>
    </main>
  );
}

function DaysList() {
  const mock_days = [
    {
      day: "23 May",
      events: 2,
    },
    {
      day: "22 May",
      events: 0,
    },
    {
      day: "21 May",
      events: 1,
    },
    {
      day: "20 May",
      events: 4,
    },
  ];

  const [days, setDays] = useState(mock_days);

  return (
    <div id="days-list" className="flex w-full py-4 overflow-x-scroll">
      {days.map((day, idx) => (
        <Day key={idx} day={day.day} events={day.events} />
      ))}
    </div>
  );
}

function Day(props: { day: string; events: number }) {
  const [isHabitsVisible, setIsHabitsVisible] = useState(false);

  const toggleHabitVisibility = () => setIsHabitsVisible(!isHabitsVisible);

  return (
    <div
      className="day 
              flex flex-col 
              min-w-[8rem] h-fit px-2 py-2
              rounded-md border-2 border-sky-700 
              mx-2 
            "
    >
      <span>{props.day}</span>
      {/* Event */}
      {props.events > 0 ? (
        <span className="flex items-center">
          <PushPin className="mx-1" /> {props.events} Events
        </span>
      ) : (
        <span className="flex items-center">No event</span>
      )}
      {/* Visualization toggle buttons */}
      <div className="buttons my-2">
        <div className="flex items-center justify-between">
          <span>Habits</span>
          <button onClick={toggleHabitVisibility}>
            {isHabitsVisible ? <EyeClosed /> : <Eye />}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span>Routines</span>
          <button>
            <Eye />
          </button>
        </div>
      </div>
      <div
        id="habits-list"
        className={isHabitsVisible ? "flex flex-col" : "hidden"}
      >
        <div className="habit-wrapper flex gap-1">
          <input type="checkbox" name="habit-sleep" id="habit-sleep" />
          <label htmlFor="habit-sleep">Sleep</label>
        </div>
        <div className="habit-wrapper flex gap-1">
          <input
            type="checkbox"
            name="habit-meditation"
            id="habit-meditation"
          />
          <label htmlFor="habit-meditation">Maditation</label>
        </div>
        <div className="habit-wrapper flex gap-1">
          <input type="checkbox" name="habit-exercise" id="habit-exercise" />
          <label htmlFor="habit-exercise">Exercise</label>
        </div>
      </div>
    </div>
  );
}
