import { Task } from "../../models/Task"
import { TasksButtons } from "../../../../components/ListItemButtons/TaskItemButtons";
import styled from "./styled.module.css";

interface TaskItemProps {
  task: Task
}

export function TaskItem(props: TaskItemProps) {
  const { task } = props;

  return (
    <li className={styled['task-item']} key={ task.id } > 
      <a href={ task.url as string }><span>{ task.title }</span></a>
      <TasksButtons task={ task } />
    </li>
  )
}