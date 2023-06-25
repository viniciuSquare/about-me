import { Task } from "../../modules/tasks/models/Task"
import styled from './styled.module.css'

interface TaskButtonsProps {
  task: Task
}

export function TasksButtons(props: TaskButtonsProps) {
  return (
    <div className={styled["task-buttons"]}>
      <button  >Doing</button>
      <button  >Commit</button>
    </div>
  )
} 