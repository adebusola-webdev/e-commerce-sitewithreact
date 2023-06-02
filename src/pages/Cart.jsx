
import React, { useContext, useState,useEffect } from 'react'
import Numberofproductbtn from '../components/Numberofproductbtn'
import { ShopContext } from "../context/shopcontext";

const Cart = () => {
  const { cartItem, productList } = useContext(ShopContext);
  const [data, SetData]=useState([])
  console.log(productList)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=0");
        const data = await res.json();
        const products = data.products;
        SetData(products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
 

  return (
    <>
      <div>
        <div>
          <h1>Cart Items</h1>
        </div>
        <div>
          {data.map((product) => {
            const quantity=cartItem[product.id]||0
            if (quantity !== 0) {
              return (
                <div key={product.id}>
                  <h2>{product.title}</h2>
                  <img src={product.images[0]} alt="" />
                  <p>Quantity: {cartItem[product.id]}</p>
                  {/* You can add more information about the product */}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};
export default Cart