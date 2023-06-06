import React, { useContext, useState, useEffect } from "react";
import Numberofproductbtn from "../components/Numberofproductbtn";
import { ShopContext } from "../context/shopcontext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItem, productList, totalCartAmount } = useContext(ShopContext);
  const [data, SetData] = useState([]);

  console.log(productList);

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
        <div className="text-center">
          <h6>Cart Items</h6>
        </div>
        <div className="shadow">
          {data.map((product) => {
            const quantity = cartItem[product.id] || 0;
            if (quantity !== 0) {
              return (
                <div key={product.id}>
                  <div className="table-responsive-sm">
                  <table className="table ">
                    <tr className="fs-6 border">
                      <th className="col-2">Items</th>
                      <th className="col-2">Price</th>
                      <th className="col-2">Quantity</th>
                      <th className="col-2">Total</th>
                    </tr>

                    <tr>
                      <td>
                        <div className="">
                          <p className="text-danger">{product.title}</p>
                          <LazyLoadImage
                            src={product.images[0]}
                            alt=""
                            effect="blur"
                            width="70px"
                            height="70px"
                          />
                        </div>
                      </td>
                      <td>${product.price}</td>

                      <td>
                        <Numberofproductbtn item={product.id} />
                      </td>

                      <td>
                        <p className="">
                          ${product.price} X {cartItem[product.id]} = $
                          {cartItem[product.id] * product.price}
                        </p>
                      </td>
                    </tr>
                  </table>
                  </div>
                  
                </div>
              );
            }
            return null;
          })}
        </div>
        {totalCartAmount > 0 ? (
          <div>
            <div className="d-flex align-item-center justify-content-center mt-5 gap-3">
              <p className="fs-3">subtotal:</p>
              <p className="fs-3">${totalCartAmount}</p>
            </div>

            <div className="d-flex flex-wrap align-item-center justify-content-center mt-5 gap-3">
              <div className="mt-4">
                <Link to="/">
                  <span className="primary-btn buynow-btn">
                   Shop
                  </span>
                </Link>
              </div>
              <div className="mt-4">
                <Link to="/cart">
                  <span className="primary-btn buynow-btn">Checkout</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-center mt-5">Your cart is empty</h1>
        )}
      </div>
    </>
  );
};
export default Cart;
