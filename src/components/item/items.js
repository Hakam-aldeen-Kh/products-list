import React from "react";

const Items = (props) => {
  const { items, del, quantity } = props;
  let length = items.length;
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <div className="edit">
            <p>+</p>
            <p>-</p>
            <p className="delete" onClick={() => del(item.id)}>
              &times;
            </p>
          </div>
          <p>{item.quantity}</p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Quantity</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
