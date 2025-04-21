import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Calulator = () => {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [result, setResult] = React.useState(null);


  const handleFirstNumberChange = (e) => {
    setFirstNumber(e.target.value);
  };
  const handleSecondNumberChange = (e) => {
    setSecondNumber(e.target.value);
  };
  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
    
  }


  //   useEffect to handle calculation
  useEffect(() => {
    
    if (operator === "add") {
      setResult(Number(firstNumber) + Number(secondNumber));
    } else if (operator === "subtract") {
      setResult(Number(firstNumber) - Number(secondNumber));
    } else if (operator === "multiply") {
      setResult(Number(firstNumber) * Number(secondNumber));
    } else if (operator === "divide") {
      setResult(Number(firstNumber) / Number(secondNumber));

    }
    
  }, [firstNumber, secondNumber]);

  // useEffect to hanlder result when either firstNumber or secondNumber is empty
/*  useEffect(() => {
    if (operator==="") {
      disabled = true;
      setResult(null);
    }
  }, [firstNumber, secondNumber]);
 */
  return (
    <div className="bg-dark text-white item-center">
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
              First select an operator to be able to Enter two numbers.
            </p>
           
              <Row className="mb-3 d-grid gap-2 ">
                <Col xs={12} md={2}>
                  <select className="form-select mt-2 mb-2" onChange={handleOperatorChange}>
              <option value="" disabled selected>
                Select Operator
              </option>
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
              <option value="multiply">Multiply</option>
              <option value="divide">Divide</option>
                  </select>
                  </Col>
                <Col xs={12} md={2}>
                  <input
                    disabled={operator === "" ? true : false}
                    type="text"
                    className="form-control"
                    placeholder="Enter first number"
                    onChange={handleFirstNumberChange}
                    value={firstNumber}
                    
            /></Col>
                <Col xs={12} md={2}>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter second number"
                    onChange={handleSecondNumberChange}
                    value={secondNumber}
             disabled={operator === "" ? true : false}
            />
                </Col>
              </Row>
             
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
