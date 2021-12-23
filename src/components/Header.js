import { Link } from "react-router-dom";

import { useState } from "react"


function Header(props) {

  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px blue",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    
      <header>
          <nav style={navStyle}>
              <Link to="/">
              <button class="bg-blue-400 p-3 pl-4 pr-4 rounded-lg font-bold transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-blue-600">Home</button>
                  {/* <div>Home</div> */}
              </Link>
          </nav>
      </header>
  )

}

export default Header;