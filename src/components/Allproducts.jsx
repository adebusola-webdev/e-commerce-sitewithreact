import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ShopContext, } from "../context/shopcontext";
import { AddToCartBtn } from "./AddToCartBtn";

export const Allproducts = ({ myproducts }) => {
  const {AddToCart,cartItem,productList} = useContext(ShopContext)

  return (
    <>
      <div className="my-5">
        <h1 className="text-danger text-center my-5 devices-header">Latest-devices
    
        </h1>
       
        
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2 align-items-center my-container shadow rounded-3 mt-2">
            {myproducts.map((item, index) => {
                // const cartItemAmount = cartItem[item.id]||0
              return (
              <Link to={`/detail/${item.id}`}> 
                <div className=" images-container d-flex align-items-center justify-content-center ">
                  <div key={item.id} className="">
                    <div className="mt-2">
                      <div className="d-flex  justify-content-center px-3">
                        <LazyLoadImage
                          src={item.images[0]}
                          width="150px"
                          height="150px"
                          effect="blur"
                        />
                      </div>
                      <div className="m-2 text-center text-dark">
                        <p className=" fs-7 px-2">{item.title}</p>
                        <div className="">
                          <p className=" fs-5">
                            &#36; <span>{item.price}</span>
                          </p>
                         
                            {/* <span className="primary-btn cart-btn " onClick={()=>AddToCart(item.id)}>
                              Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
                              <i className="fa-solid fa-cart-shopping shopping-cart fs-7 "></i>
                            </span> */}
                            <AddToCartBtn cartdata={item.id}/>
                         
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>  
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
