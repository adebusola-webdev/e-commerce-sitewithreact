import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Categories } from "./Categories";

export const Header = ({ data }) => {
  
  const [name, setName] = useState("");
  const inputHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <header className="header-container py-1 container-fluid">
        <nav className=" text-white">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="logo">
                <Link className="text-white">
                  <span className="text-danger">B</span>u
                  <span className="text-danger">B</span>u.Co
                </Link>
              </h1>
            </div>
            <div className="col-md-6">
              <div className="input-group p-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Find items"
                  aria-label="Find items"
                  aria-describedby="basic-addon2"
                  onChange={inputHandler}
                  value={name}
                />
                <Link
                  to={`/search/${name}`}
                  class="input-group-text py-1 bg-danger"
                  id="basic-addon2"
                >
                  <span>
                    <BsSearch className="fs-6 text-white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <header className="bottom-header container-fluid ">
        <div className="container ">
          <div className="">
            <div className=" container ">
              <div className="menu d-flex align-items-center justify-content-center headergap ">
                <div>
                  <div className="dropdown">
                    <Link
                      className="btn btn-white dropdown-toggle text-danger border-0 d-flex align-items-center gap"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>
                        <i className="fa-solid fa-list"></i> Categories
                      </span>
                    </Link>

                    <Categories category={data} />
                  </div>
                </div>
                <div className="d-flex align-items-center  nav-link text-danger">
                  <NavLink className={"text-danger"} to={"/"}>
                    home
                  </NavLink>
                </div>
                <div className="col-4 mt-2">
                  <div>
                    <Link
                      to="/cart"
                      className="text-white d-flex gap-2  align-items-center"
                    >
                      <i class="fa-solid fa-cart-shopping fs-4 text-danger"></i>
                      <p className="fs-8 text-center mt-3 text-danger">Cart</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
