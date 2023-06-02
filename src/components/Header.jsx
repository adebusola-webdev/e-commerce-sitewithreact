import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Suspense } from "react";
import {
  useLoaderData,
  useRouteLoaderData,
  Link,
  defer,
  Await,
} from "react-router-dom";
import { useState } from "react";
import { Categories } from "./Categories";

export const Header = ({ data }) => {
  // const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const inputHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <header className="header-container py-1 container-fluid">
        <nav className=" text-white">
          <div className="row align-items-center">
            <div className="col-3">
              <h1 className="logo">
                <Link className="text-white">
                  <span className="text-danger">B</span>u
                  <span className="text-danger">B</span>u.Co
                </Link>
              </h1>
            </div>
            <div className="col-6">
              <div class="input-group p-3">
                <input
                  type="text"
                  class="form-control py-2"
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
            <div className="col-3 mt-2">
              <div className="Header-link d-flex  align-items-center gap-3">
                <div>
                  <Link className="text-white d-flex gap-2 align-items-center">
                    <i class="fa-regular fa-user fs-4"></i>
                    <p className="fs-8 mt-3 text-danger">
                      My Account <br />
                      Log in
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className="text-white d-flex gap-2  align-items-center">
                    <i class="fa-solid fa-cart-shopping fs-4"></i>
                    <p className="fs-8 text-center mt-3 text-danger">Cart</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <header className="bottom-header">
            <div className="container">
              <div className="row">
                <div className="col-12 bg-white ">
                  <div className="menu d-flex align-items-center gap-5 ">
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
                    <div className="d-flex align-items-center gap-5 nav-link text-danger">
                      <NavLink className={"text-danger"} to={"/"}>
                        home
                      </NavLink>
                      <NavLink className={"text-danger"}>ourstore</NavLink>
                      <NavLink className={"text-danger"}>blogs</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </nav>
      </header>

      <div></div>
    </>
  );
};
