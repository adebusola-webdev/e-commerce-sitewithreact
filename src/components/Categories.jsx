import React from "react";
import {
  useLoaderData,
  useRouteLoaderData,
  Link,
  defer,
  Await,
} from "react-router-dom";


export const Categories = ({ category }) => {
  return (
    <>
     <div>
      <ul className="dropdown-menu">
        {
          category.map((item, idx) => (
            <Link to={`/productcat/${item}`} className="text-dark d-block">
            <li  key={idx} className="dropdown-item">
              {item}
            </li>
            </Link>
          ))
        }
      </ul>
     </div>
    </>
  );
};
