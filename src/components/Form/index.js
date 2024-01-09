import { useState } from "react";
import "./styles.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
import * as database from "./../../database";

export default function Form({ onHandleAddTask, statuses }) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleFormAddTask = async (event) => {
    event.preventDefault();
    const data = {
      description,
      status,
    };
    if (description.length < 5) {
      setErrorMessages(
        "A description of minimum 5 characteristics is required"
      );
    } else {
      const savedId = await database.save(data);

      if (savedId.length > 0) {
        onHandleAddTask(description, status, savedId);
        setDescription("");
        setStatus(false);
        setErrorMessages([]); // i changed this setErrorMessages('')
      } else {
        setErrorMessages(["Failed to save data.999999 "]);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleFormAddTask}>
      {" "}
      {errorMessages.length > 0 && (
        <div className="form-validate">
          {" "}
          invalid data <ul>{errorMessages}</ul>
        </div>
      )}
      <h1>Add a new Task:</h1>
      <div className="add-task">
        <div className="description">Enter a description. </div>

        <label>
          Description:
          <input
            className="holder"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            placeholder="Description"
            required
          />
        </label>

        <label>
          Status:
          <select
            className="holder"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statuses.map((item) => (
              <option key={item.id} value={item.id}>
                {item.text}
              </option>
            ))}
          </select>
        </label>

        <button className="holder">
          <IoIosAddCircleOutline />
          Add
        </button>
      </div>
    </form>
  );
}
