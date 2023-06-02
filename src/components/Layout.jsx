import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "../pages/Home";

export const Layout = () => {
  const data =useLoaderData()
  return (
    <>
   
    <Header data={data}/>
  
    <Outlet />
    <Footer />
    
   
    </>
  );
};
export const categoriesLoader = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products/categories');
    const data = await res.json();
    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
};