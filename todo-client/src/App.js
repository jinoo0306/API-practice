import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [title, setTitle] = useState("");
  const [thumnail, setThumnail] = useState();

  const onLoadFile = (e) => {
    setThumnail(e.target.files[0]);
  };
  const createTodo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("todoData", title);
    formData.append("file", thumnail);
    const response = await axios.post("/api/todos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="file" onChange={onLoadFile} />
        <button onClick={createTodo}>Create</button>
      </form>
      <ul>
        <li>
          <input type="checkbox" />
          <img src="" alt="thumnail" />
          <span>Task</span>
          <button>delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
