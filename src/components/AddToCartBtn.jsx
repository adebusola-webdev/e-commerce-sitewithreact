
import { ShopContext } from "../context/shopcontext";
import React, { useContext } from "react";



export const AddToCartBtn = ({ cartdata }) => {
  const { AddToCart, cartItem, productList } = useContext(ShopContext);
  const cartItemAmount =cartItem[cartdata]
  return (
    <>
      <div className="">
        
     
        <span
          className="primary-btn cart-btn "
          onClick={() => AddToCart(cartdata)}
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          <i className="fa-solid fa-cart-shopping shopping-cart fs-7 "></i>
        </span>   
      </div>
    </>
  );
};
