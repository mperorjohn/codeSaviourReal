import React from "react";
import '../index.css';
import image from "../images/IMG_20210214_130932_054.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router';
import { Image } from "react-bootstrap";


const Tiana = () => {
    let person = {
    firstname: "Christiana",
    surname: "Omonola",
    height: '5ft 6"',
    gender: "female",
    course: "Computer engineering",
    school: "F. U. T. Minna",
    weight: 65,
    haircolor: "black",
    eyecolor: "brown",
    skintone: "melanin",
    ishonest: true,
    address : {
        state: "Adamawa",
        lga: "Yola North",
        street: "No 13, owerri street",
    },
    hobbies: ["sewing", "cooking", "travelling", "coding"],
    canSing: false,
    siblings: ["Victor", "Joy"]
}
    return (
                <Card>
                    <Image variant="top" src={image} className="img-fluid w-5" sizes="30" roundedCircle/>
                <Card.Body>
                    <Card.Title>My Profile</Card.Title>
                    <Card.Subtitle>Let me introduce myself</Card.Subtitle>
                    <Card.Text>
                        
                        <p className="details"> I am {person.firstname} {person.surname}, a {person.height} {person.gender} who studied {person.course} from {person.school}. I have {person.haircolor} hair, {person.eyecolor} eyes, {person.skintone} skin and I weigh {person.weight}Kg. {person.ishonest ? 'I am a honest person that also loves those who are honest.' : 'You can chose not to be honest with me cause I am also not honest.'} I live at {person.address.street}, {person.address.lga} L.G.A of {person.address.state}. I love {person.hobbies} {person.canSing ? 'and singing' : 'but i also wish I can sing'} . I have {person.siblings.length} siblings. </p>
                    </Card.Text>
                    <Card.Link href="#"><Button variant="primary"><Link to="/registerTiana">Contact me</Link></Button></Card.Link>
                    
                    </Card.Body>
            
            
            
               </Card>
            
    )
    
  
}

export default Tiana