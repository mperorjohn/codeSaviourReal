import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import image from "../images/IMG_20210214_130932_054.jpg";
import TextArea from "../components/TextArea";

const Testing = () => {
  const isDeactivate = false;

  //    onclick testing
  const testClick = () => {
    alert("Button test was clicked!");
  };

  

  return (
    <div className="container mt-5">
      <h1 className="text-center">This is Testing Page</h1>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Button name="Click Me" disabled={false} onclick={testClick} />
      </div>
      <div className="d-flex justify-content-center">
        <Button name="Disabled Button" disabled={true} />
      </div>
      <Card
        title={"My Profile"}
        image={image}
        alt={"christiana"}
        description={"This is christiana from one bush in yola"}
        price={300}
        buttonName={"Buy me"}
        buttonDisable={false}
        onclick={ ()=> {
          alert("Card button was clicked!");
        }
        }
      />
      <div>
        <p>Make enquuiry</p>
        <TextArea
          name={"contactMessage"}
          id={"contactMessage"}
          defaultMessage={"Enter your message here"}
          disable={isDeactivate}
          max={100}
          min={10}
          row={50}
        />
      </div>
    </div>
  );
};

export default Testing;
