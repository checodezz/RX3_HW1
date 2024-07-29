import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, fetchTasks } from "./taskSlice";
import { useEffect } from "react";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state?.tasks?.taskData?.tasks);
  console.log(taskData);
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleStatusButtonClick = (dayIndex, taskId) => {
    dispatch(toggleTaskStatus({ dayIndex, taskId }));
  };
  return (
    <div>
      {taskData?.map((task, index) => (
        <div key={index}>
          <h2>{task?.date}</h2>

          <ul>
            {task.tasks.map((task) => (
              <>
                <li key={task.taskId}>
                  {task.task}{" "}
                  <button
                    onClick={() => handleStatusButtonClick(index, task.taskId)}
                  >
                    {task.taskStatus}
                  </button>
                </li>
                <br />
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
