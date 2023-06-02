import React from "react";

export const Footer = () => {
  return (
    <>
     
  
      <footer className="bottom-footer">
        <div className="container py-3 ">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-danger">
                @ {new Date().getFullYear()}:Powered by Adebusola
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
