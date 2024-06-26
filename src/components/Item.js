import React, { useState } from "react";

function Item({ name, category }) {
  const [cartState, setCart] = useState(false);

  function handleCart() {
    setCart((cart) => !cart);
  }

  return (
    <li className={cartState ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {cartState ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
