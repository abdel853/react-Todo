// import uuid from "react-uuid";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import Help from "./pages/Help";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.scss";
import HelpAddingTaks from "./pages/Help/AddingTaks";
import HelpRemovingTaks from "./pages/Help/RemoveingTasks";
import HelpChangingStatus from "./pages/Help/ChangingStatus";
import HelpIntroduction from "./pages/Help/introduction";
import PageNotFound from "./pages/PageNotFound";
import PageContainer from "./components/PageContainer";
import Loading from "./components/Loading";
import * as database from "./database";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    (async () => {
      //load the database
      const data = await database.load();
      setTasks(data);
      setLoading(false);
    })();
  }, []);

  // handle remove task
  const handleRemoveTaskClick = async (id) => {
    const updatedTask = tasks.filter(function (description) {
      return description.id !== id;
    });

    //remove from firebase
    const removed = await database.remove(id);
    setErrorMessage("");
    console.log("removed", removed);
    if (!removed) {
      // alert("Failed to remove post");
      setErrorMessage("Something went wrong!!!  Failed to remove post");
    } else {
      setTasks(updatedTask);
    }
  };

  //  handle clear
  const handleClearTasks = async () => {
    //clear data from firebase
    const data = await database.load();
    const cleared = database.clean(data);
    if (cleared) {
      setTasks([]);
      setErrorMessage("");
    } else {
      // alert("something went wrong, task coulden't be cleared");
      setErrorMessage("something went wrong!!!   Task coulden't be cleared");
    }
  };

  // handle change status
  const handleChangeStatusClick = async (id) => {
    let data = [];
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.status = !task.status;
        data = { status: task.status };
      }
    });
    //update status in firebase
    const updated = await database.update(id, data);
    if (updated) {
      setTasks(updatedTasks);
      setErrorMessage("");
    } else {
      // alert("Failed to change status");
      setErrorMessage("Something went wronge!!!  Failed to change status");
    }
  };

  const statuses = [
    { id: "false", text: "Uncompleted" },
    { id: "true", text: "Completed" },
  ];
  // handle add button
  const handleAddTaskClick = (description, status, savedId) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: savedId,
      description,
      status,
    });
    setTasks(updatedTasks);
  };
  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PageContainer hasH1={false}>
                <Tasks
                  errorMessage={errorMessage}
                  tasks={tasks}
                  onHandleChange={handleChangeStatusClick}
                  onHandleRemove={handleRemoveTaskClick}
                  onHandleClear={handleClearTasks}
                />
              </PageContainer>
            }
          />

          <Route
            path="/add"
            element={
              <PageContainer hasH1={false}>
                {" "}
                <Form
                  onHandleAddTask={handleAddTaskClick}
                  statuses={statuses}
                />
              </PageContainer>
            }
          />

          <Route path="/help" element={<Help />}>
            <Route path="" element={<HelpIntroduction />} />
            <Route path="adding-tasks" element={<HelpAddingTaks />} />
            <Route path="removing-tasks" element={<HelpRemovingTaks />} />
            <Route path="changing-status" element={<HelpChangingStatus />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
