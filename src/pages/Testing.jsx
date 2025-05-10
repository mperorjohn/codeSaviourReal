import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import image from "../images/IMG_20210214_130932_054.jpg";
import TextArea from "../components/TextArea";

const Testing = () => {
  const isDeactivate = false;
  const [isStyled, setIsStyled] = useState(true);

  const testClick = () => {
    alert("Button test was clicked!");
  };

  const handleClick = () => {
    setIsStyled(!isStyled);
  };

  const myStyle = {
    backgroundColor: isStyled ? "white" : "black",
    color: isStyled ? "black" : "white",
    width: "20rem",
    minHeight: "10vh",
    transition: "all 0.3s ease",
  };

  return (
    <div style={{ color: "white" }}>
      <div className="container pt-5">
        <h1 className="text-center">This is Testing Page</h1>

        <div className="d-flex justify-content-center mt-5 mb-3">
          <Button name="Click Me" disabled={false} onclick={testClick} />
        </div>

        <div className="d-flex justify-content-center mb-4">
          <Button name="Test Button" disabled={false} onclick={testClick} />
        </div>

        <div className="mb-5">
          <Card
            style={myStyle}
            title="My Profile"
            image={image}
            alt="christiana"
            description="I am Omonola Christiana from the city of Yola, Adamawa state Nigeria"
            price={300}
            buttonName="Buy me"
            buttonDisable={false}
            onclick={handleClick}
          />
        </div>

        <div>
          <p>Make enquiry</p>
          <TextArea
            name="contactMessage"
            id="contactMessage"
            defaultMessage="Enter your message here"
            disable={isDeactivate}
            max={100}
            min={10}
            row={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Testing;
