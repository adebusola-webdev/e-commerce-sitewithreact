import { Link, useLoaderData, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AddToCartBtn } from "./AddToCartBtn";

export const Search = () => {
  const mydata  = useLoaderData();
  const { search } = useParams();

  return (
    <>
   <div className="container mb-5 mt-4">
          <div className="d-flex flex-wrap justify-content-center gap-2 align-items-center my-container shadow rounded-3 mt-2">
            {mydata.map((item, index) => {
              return (
                <Link to={`/detail/${item.id}`}> 
                <div className=" images-container d-flex align-items-center justify-content-center ">
                  <div key={item.id} className="">
                    <div className="mt-2">
                      <div className="d-flex  justify-content-center">
                        <LazyLoadImage
                          src={item.images[0]}
                          width="150px"
                          height="150px"
                          effect="blur"
                        />
                      </div>
                      <div className="m-2 text-center text-dark">
                        <p className=" fs-5 ">{item.title}</p>
                        <div className="">
                          <p className=" fs-5">
                            &#36; <span>{item.price}</span>
                          </p>
                         
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
    </>
  );
};
export const SearchLoader = async ({ params }) => {
  const { search } = params;
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const data = await res.json();
    console.log(data)
    return data.products;
  } catch (err) {
    console.log(err);
  }
};
