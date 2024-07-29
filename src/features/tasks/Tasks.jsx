import { useSelector } from "react-redux";

const TaskList = () => {
  const taskData = useSelector((state) => state.tasks.taskData);

  return (
    <div>
      <h1>My Task List</h1>
      {taskData.map((day) => (
        <div key={day.id}>
          <h2>{day.date}</h2>
          <ul>
            {day.tasks.map((task, index) => (
              <li key={index}>
                <p>{task.taskName}</p>
                <p>Status: {task.status}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
