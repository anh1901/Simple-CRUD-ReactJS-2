import React from "react";

//stateless Functional component-> function

const Navbar = () => {
  return (
    <>
      <div>
        <a href="https://google.com">
          Just
          <img
            src="https://www.tech4goodawards.com/wp-content/uploads/2018/03/Do-IT-Logo-600px.png"
            width="80"
            height="80"
            alt="JustDoIt-Logo"
            style={{paddingTop:'5%'}}
          />
        </a>
      </div>
    </>
  );
};
export default Navbar;
