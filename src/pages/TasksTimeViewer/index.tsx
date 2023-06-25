import { TasksList } from "../../components/TasksList";
import { TimeView } from "../../components/TimeView";
import { UnsplashImage } from "../../components/UnsplashBackground";

import styled from "./styled.module.css";

export default function TasksTimeViewer() {
  return (
    <div className={styled.content}>
      <UnsplashImage /> {/* Background image */}
      <div className="side-bar">
        <TasksList />
      </div>
      <TimeView />
    </div>
  );
}