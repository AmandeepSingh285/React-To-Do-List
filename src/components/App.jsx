import React from "react";

function NewListElement(elem) {
  return <li> {elem} </li>;
}

function App() {
  const [work, setWork] = React.useState([]);

  const [newItem, setNewItem] = React.useState("");

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function AddNew() {
    setWork((prev) => {
      return [...prev, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={newItem} onChange={handleChange} />
        <button onClick={AddNew}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{work.map(NewListElement)}</ul>
      </div>
    </div>
  );
}

export default App;
