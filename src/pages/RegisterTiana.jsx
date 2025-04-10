import React from "react";
import { Link } from 'react-router';
import '../pages/RegisterTiana.css'; // import the css file
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


const RegisterTiana = () => {
    const [surname, setSurname] = React.useState("");   // string state
    const [othername, setOthername] = React.useState("");   // string state
    const [username, setUsername] = React.useState("");   // string state
    const [email, setEmail] = React.useState("");  // string state
    const [phone, setPhone] = React.useState(0);  // number state
    const [password, setPassword] = React.useState("");  // string state
    const [confirmPassword, setConfirmPassword] = React.useState("");  // string state
    const [profilePicture, setProfilePicture] = React.useState(null);  // file state
    const [gender, setGender] = React.useState("");  // string state
  const [register, setRegister] = React.useState(false);     // boolean state
  const [error, setError] = React.useState('');

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };
    const handleOthernameChange = (e) => {
        setOthername(e.target.value);
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleProfilePictureChange = (e) => {
      const file = (e.target.files[0]);
       if(file){setProfilePicture(URL.createObjectURL(file))}
  }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleRegister = (e)=>{
      setRegister(true)
      // redirect to another page
      
  }
 const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    else {
      setError('');
      window.alert("Passwords match. Processing....");
      setTimeout(()=>{
        window.location.href = "/tiana"
      }
      , 3000)
    }
  }
 
  return (
    <div>
      <div className="reg">
        <Container className="bg-muted text-white p-5 mt-5" style={{ height: "100vh", width: "70vw" }}>
          
          {profilePicture && <img className="d-block mx-auto"src={profilePicture} alt="" height="100px" style={{ borderRadius: "50%" }} />}
          <h1>Registration</h1>
          <form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Control type="text" placeholder="Enter your surname" value={surname} onChange={handleSurnameChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicOthername">
            <Form.Control type="text" placeholder="Enter your othername" value={othername} onChange={handleOthernameChange} required /></Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control type="text" placeholder="Enter your username" value={username} onChange={handleUsernameChange} required /></Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} required /></Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Control type="number" placeholder="Enter your phone number" value={phone} onChange={handlePhoneChange} required /></Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required /></Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required /></Form.Group>
            <Form.Check inline type="radio" name="gender" id="male" label="Male" onChange={handleGenderChange} />
          <Form.Check inline type="radio" name="gender" id="female" label="Female" onChange={handleGenderChange} />
          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose file</Form.Label>
          <Form.Control type="file" onChange={handleProfilePictureChange} />
        </Form.Group>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button className="d-grid gap-2" size="lg" type="submit"
                  style={{backgroundColor: surname==="" ||othername==="" ||username==="" ||email==="" || phone===0 || password==="" || confirmPassword==="" ||gender===""|| profilePicture===null  ? "grey" : "royal blue",
                   cursor: surname==="" ||othername==="" ||username==="" ||email==="" || phone===0 || password==="" || confirmPassword==="" ||gender===""|| profilePicture===null ? "not-allowed": "pointer",
                  }} disabled={surname === "" || othername === "" || username === "" || email === "" || phone === 0 || password === "" || confirmPassword === "" || gender === "" || profilePicture === null ? true : false}
              onClick={handleRegister}>Register</Button><br />
            </form>
            <Link to="/login">Already have an account? Login here</Link>
        </Container>
      </div>
    </div>
  );
}

export default RegisterTiana;