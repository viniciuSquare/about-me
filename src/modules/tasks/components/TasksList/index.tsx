import { useEffect, useState } from "react";
import { Task } from "../../models/Task";
import { TaskItem } from "../TaskItem";

import styled from "./styled.module.css";
import { TasksService } from "@/services/TasksService";

interface ListProps {
  loaderHandler: () => void;
}

export function TasksList() {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => setIsLoading(!isLoading);

  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    const tasksService = new TasksService();

    tasksService.getData()!.then((response) => {
      console.log(response)
      setTasks(
        response.data.map((responseElement: Task) => {
          const task = new Task();
          task.populateWithReponse(responseElement);
          return task;
        })
      );
      toggleLoading();
    });
  }, []);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <aside className={styled.aside}>
      <h2>Tasks</h2>
      <ul>
        {tasks?.map((task) => (
          <TaskItem task={task} />
        ))}
      </ul>
    </aside>
  );
}
