import React from "react";
import { Image } from "react-bootstrap";
import image from "../images/IMG_20210214_130932_054.jpg";
import Container from "react-bootstrap/Container";
import ProgressBar from 'react-bootstrap/ProgressBar';

const John = () => {
  const person = {
    name: "John",
    age: 25,
    country: "USA",
    occupation: "Software Engineer",
    hobbies: ["reading", "gaming", "hiking"],
    isEmployed: true,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: 10001,
    },
    course: [
      {
        name: "Software Engineering",
        progress: 40,
      },
        {
            name: "Data Science",
            progress: 60,
        },
        {
            name: "Web Development",
            progress: 80,
        },

    ],
  };

  return (
    // <Container>
      <div className="container mt-5">
        <div className="bg-white text-black card p-5 ">
          <Image src={image} alt="John" thumbnail width={200} />
          <h4 className="text-black fs-3">My name is {person.name}</h4> <div className="progress">
          <ul className="list-group d-flex flex-column">
      {person.course.map((course, index) => (
        <li key={index} className="list-group-item">
          <ProgressBar now={course.progress} label={`${course.progress}%`} />
        </li>
      ))}
    </ul>
          </div>

          <div>
            <p>
              I am {person.age} years old and I live in {person.country}.
            </p>
            <p>
              I work as a {person.occupation} and I enjoy{" "}
              {person.hobbies.join(", ")}.
            </p>
            <p>
              My address is {person.address.street}, {person.address.city},{" "}
              {person.address.state}, {person.address.zipCode}.
            </p>
            <p>
              Employment Status:{" "}
              {person.isEmployed ? "Currently Employed" : "Unemployed"}
            </p>
          </div>
         
        </div>
      </div>
    // </Container>
  );
};

export default John;
