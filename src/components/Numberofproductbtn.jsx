import { useState } from "react";

import { ShopContext } from "../context/shopcontext";
import React, { useContext } from "react";

const Numberofproductbtn = ({ item }) => {
  const { AddToCart, cartItem, productList, RemoveCart, totalCartAmount } =
    useContext(ShopContext);

  

  return (
    <div>
      <div className="d-flex gap-3">
        <div className="fs-6">NO:</div>
        <button
          className="border-0 px-2 bg-danger rounded"
          onClick={() => RemoveCart(item)}
        >
          {" "}
          -
        </button>
        <div>{cartItem[item]}</div>
     
        <button
          className="border-0 px-2 bg-danger rounded"
          onClick={() => AddToCart(item)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Numberofproductbtn;
