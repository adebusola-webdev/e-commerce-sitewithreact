// import React, { createContext, useContext, useState, useEffect } from "react";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const [cartItem, setCartItem] = useState({});
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://dummyjson.com/products?limit=0");
//         const data = await res.json();
//         const products = data.products;
//         setProductList(products);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const getDefaultCart = () => {
//       let cart = {};
//       for (let i = 0; i < productList.length; i++) {
//         const item = productList[i];
//         cart[item.id] = 0;
//       }
//       return cart;
//     };

//     setCartItem(getDefaultCart());
//   }, [productList]);

//   const AddToCart = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const RemoveCart = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const contextValue = { cartItem, AddToCart, RemoveCart };
//  console.log(cartItem)
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );

// };

// export default ShopContextProvider;

import React, { createContext, useContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=0");
        const data = await res.json();
        const products = data.products;
        setProductList(products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getDefaultCart = () => {
      let cart = {};
      for (let i = 0; i < productList.length; i++) {
        const item = productList[i];
        cart[item.id] = 0;
      }
      return cart;
    };

    setCartItem(getDefaultCart());
  }, [productList]);

  const AddToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const RemoveCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItem, AddToCart, RemoveCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {productList.length > 0 ? props.children : "Loading..."}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;