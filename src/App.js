import React from "react";
import "./App.css";

function App() {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState("");

  // delete item from list by index
  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      <div className="container">
        <p>
          {items.map((item) => (
            <div className="items">
              <div className="item">{item}</div>
              <button
                className="button"
                onClick={() => {
                  deleteItem(items.indexOf(item));
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </p>
        <input
          className="input"
          placeholder="Add a new item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />

        <button
          className="button"
          onClick={() => {
            setItems([...items, value]);
            setValue("");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default App;
