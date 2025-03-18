import React from "react";

const Header = () => {


    let name = "Th is Header form Yola home of poor network";
    let date = new Date().toLocaleDateString();
  return (
    <header>
      <h1
        style={{
          color: "blue",
          backgroundColor: "black",
          padding: "10px",
          textAlign: "center",
        }}
      >
         {name}{date} 
      </h1>
    </header>
  );
};

export default Header;
