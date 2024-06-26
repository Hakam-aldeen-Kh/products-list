import React, { useState } from "react";
import "./App.css";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, product: "Pen", price: 2, quantity: 1 },
    { id: 2, product: "Book", price: 10, quantity: 1 },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (item) => {
    setItems((prevItems) => {
      const newItem = {
        ...item,
        id: prevItems.length > 0 ? prevItems[prevItems.length - 1].id + 1 : 1,
      };
      return [...prevItems, newItem];
    });
  };

  const increaseItem = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseItem = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  return (
    <div className="container">
      <h1>Product List React App</h1>
      <div className="table">
        <Items
          items={items}
          del={deleteItem}
          inc={increaseItem}
          dec={decreaseItem}
        />
        <AddItem add={addItem} />
        <Total items={items} />
      </div>
    </div>
  );
};

export default App;
