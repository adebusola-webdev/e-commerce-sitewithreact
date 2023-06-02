import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { categoriesLoader, Layout } from "./components/Layout";
import {  Home, ProductLoader } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Header, Loader } from "./components/Header";
import { Search, SearchLoader } from "./components/Search";
import  Errorpage from "./components/Errorpage";
import Details, { pDetailLoader } from "./components/Details";
import Cart from "./pages/Cart";
import Productcat, { ShowCategoriesLoader } from "./pages/Productcat";
import ShopContextProvider from "./context/shopcontext";



const router = createBrowserRouter([
  {
 
    path:"/",
    element:<Layout/>,
    loader: categoriesLoader,
    errorElement:<Errorpage/>,

  
    children:[
      {
      
       
        loader:ProductLoader,
        path:'/',
        index:true,

        element:<Home/>,
        
        
          
      },
      {
        path:'/search/:search',
        element:<Search />,
        loader: SearchLoader,
    
        
      },
      {
        path:'/detail/:id',
        element:<Details/>,
        loader:pDetailLoader,
    
        
      },
      {
        path:'/productcat/:category',
        element:<Productcat/>,
        loader:ShowCategoriesLoader,
      
    
        
      },
      {
        path:'/cart',
        element:<Cart/>,
      
    
        
      },
    ]
  }
]);

function App() {
  return (
    <div>
      <ShopContextProvider>
      <RouterProvider router={router} />
      </ShopContextProvider>
     
    </div>
  );
}

export default App;
