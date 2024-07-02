import React, { useState } from "react";
import firebaseConfig from "./firebase.config";
import { getDatabase, ref, set } from "firebase/database";

const App = () => {
  let [task, setTask] = useState("");
  let handleTask = (e) => {
    setTask(e.target.value);
  };
  let handleclick = () => {
    const db = getDatabase();
    set(ref(db, "store/"), {
      Name: task,
    });
  };
  console.log(task);
  return (
    <>
      <input type="text" placeholder="Enter your task" onChange={handleTask} />
      <button onClick={handleclick}>Submit</button>
    </>
  );
};

export default App;
