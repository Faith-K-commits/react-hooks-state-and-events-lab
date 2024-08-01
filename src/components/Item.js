import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(true)
  const listClass = !addToCart ? "in-cart" : ""
  const handleClick = () => {
    setAddToCart(addToCart => !addToCart)
  }
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addToCart ? 'Add to Cart' : 'Remove from Cart'}</button>
    </li>
  );
}

export default Item;
