import { TasksList } from "@/components/TasksList";
import { TimeView } from "@/components/TimeView";
import { UnsplashImage } from "@/components/UnsplashBackground";

import styled from '@/styles/TimeViewerPage.module.css';

export default function TimerViewer() {
  return (
    <div className={styled.content}>
      <UnsplashImage /> {/* Background image */}
      <TasksList />
      <TimeView />
    </div>
  );

}