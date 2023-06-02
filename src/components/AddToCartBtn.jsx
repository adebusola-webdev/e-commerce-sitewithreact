
import { ShopContext } from "../context/shopcontext";
import React, { useContext } from "react";

export const AddToCartBtn = ({ cartdata }) => {
  const { AddToCart, cartItem, productList } = useContext(ShopContext);

  return (
    <>
      <div>
        {cartdata.map((item, index) => {
          const cartItemAmount = cartItem[item.id] || 0;
     
        <span
          className="primary-btn cart-btn "
          onClick={() => AddToCart(item.id)}
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          <i className="fa-solid fa-cart-shopping shopping-cart fs-7 "></i>
        </span>   })}
      </div>
    </>
  );
};
