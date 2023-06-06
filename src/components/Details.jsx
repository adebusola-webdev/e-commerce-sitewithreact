import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detailsimg from "./Detailsimg";
import { Link } from "react-router-dom";
import Numberofproductbtn from "./Numberofproductbtn";
import { ShopContext } from "../context/shopcontext";
import { useContext } from "react";
import { AddToCartBtn } from "./AddToCartBtn";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  let mydata = [];
  mydata.push(data);
  const { AddToCart, cartItem, productList } = useContext(ShopContext);

  return (
    <div className="container details-con shadow d-lg-flex  justify-content-between mb-5 mt-5 h-75 rounded gap">
      <div className="dImgcontainer mb-5 mt-5">
        <Detailsimg dImg={mydata} />
      </div>
      <div>
        {mydata.map((item, index) => {
          const cartItemAmount = cartItem[item.id] || 0;
          return (
            <div key={index} className="detailsinfo mt-3 mb-5 ">
              <h3 className=" fs-1 fw-bold text-danger">{item.title}</h3>
              <h6 className="fs-5">
                {" "}
                <span className="fw-bold title"> Category:</span>{" "}
                {item.category}
              </h6>
              <h6 className="fs-5">
                {" "}
                <span className="fw-bold fs-5 "> Brand:</span> {item.brand}
              </h6>
              <p className="fs-6">
                {item.description} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Odit numquam nisi eaque velit inventore illo,
                alias eum voluptates atque accusamus vitae eius doloremque, iste
                deleniti, sapiente repellendus mollitia. Quis, accusamus!
              </p>

              <div>
                <h4 className="text-dark mb-3">${item.price}</h4>
              </div>
              <div className=" d-button d-flex gap-5">
               
                <Numberofproductbtn item={item.id}  />
              
                <AddToCartBtn cartdata={item.id}/>
              </div>
              <div className="mt-4">
                <Link to="/cart">
                  <span className="primary-btn buynow-btn">Buy now</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;

export const pDetailLoader = async ({ params }) => {
  const { id } = params;

  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
