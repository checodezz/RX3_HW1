import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTaskStatus } from "./taskSlice";
const TaskList = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.tasks.taskData);

  const handleStatusButtonClick = (dayId, taskIndex) => {
    dispatch(toggleTaskStatus({ dayId, taskIndex }));
  };
  return (
    <div>
      {taskData.map((day) => (
        <div key={day.id}>
          <h2>{day.date}</h2>
          <ul>
            {day.tasks.map((task, index) => (
              <div key={index}>
                <li key={index}>
                  <span>{task.taskName}.</span>{" "}
                  <button
                    onClick={() => handleStatusButtonClick(day.id, index)}
                  >
                    {task.status}
                  </button>
                </li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
