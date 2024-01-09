import "./styles.scss";
import Task from "./Task";
import { AiOutlineClear } from "react-icons/ai";
import ChoseTask from "./../choseTask";

export default function Tasks({
  errorMessage,
  tasks,
  onHandleChange,
  onHandleRemove,
  onHandleClear,
}) {
  return (
    <>
      <div className="tasks-component">
        {errorMessage.length > 0 && (
          <div className="form-validate">{errorMessage}</div>
        )}

        {tasks.map((task, index) => (
          <Task
            key={index}
            {...task}
            onHandleRemove={onHandleRemove}
            onHandleChange={onHandleChange}
          />
        ))}

        {tasks.length === 0 ? (
          <ChoseTask />
        ) : (
          <div className="clear">
            <AiOutlineClear className="tasks" onClick={onHandleClear} />
            Clear Tasks
          </div>
        )}
      </div>
    </>
  );
}
