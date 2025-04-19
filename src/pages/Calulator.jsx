import React from "react";
import { useEffect } from "react";

const Calulator = () => {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [result, setResult] = React.useState(null);

  const handleFirstNumberChange = (e) => {
    setFirstNumber(e.target.value);
  };
  const handleSecondNumberChange = (e) => {
    setSecondNumber(e.target.value);
  };

  //   useEffect to handle calculation
  useEffect(() => {
    if (firstNumber && secondNumber) {
      setResult(Number(firstNumber) + Number(secondNumber));
    }
  }, [firstNumber, secondNumber]);

  // useEffect to hanlder result when either firstNumber or secondNumber is empty
  useEffect(() => {
    if (!firstNumber || !secondNumber) {
      setResult(null);
    }
  }, [firstNumber, secondNumber]);

  return (
    <div className="bg-dark text-white">
      <h1 className="text-center text-white">Calculator</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Simple Calculator</h2>
            <p className="text-center">
              This is a simple calculator that can perform basic arithmetic
              operations.
            </p>
            <p className="text-center">
              Enter two numbers and click on the button to perform the
              calculation.
            </p>
            <select className="form-select mt-2 mb-2">
              <option value="" disabled selected>
                Select Operator
              </option>
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
              <option value="multiply">Multiply</option>
              <option value="divide">Divide</option>
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first number"
              onChange={handleFirstNumberChange}
              disabled={true}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter second number"
              onChange={handleSecondNumberChange}
              disabled={true}
            />
            {/* 
                selct what arithmetic operation to perform
    
            */}

            <p>
              The number you entered is {firstNumber} and {secondNumber} and the
              result is {result}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calulator;
