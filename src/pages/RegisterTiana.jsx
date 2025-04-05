import React from "react";
import { Link } from 'react-router';
import '../pages/RegisterTiana.css'; // import the css file



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
    <div >
      <div className="reg">
        {profilePicture && <img src={profilePicture} alt="" height="100px" style={{ borderRadius: "50%" }} />}
          <h1>Registration</h1>
          <form onSubmit={handleSubmit}>
              <input type="text" name="surname" id=""  placeholder="Surname" onChange={handleSurnameChange}/><br/>
              <input type="text" name="othername" id=""  placeholder="Other Name" onChange={handleOthernameChange}/><br/>
                <input type="text" placeholder="Username" onChange={handleUsernameChange} /><br/>
              <input type="email" placeholder="Email" onChange={handleEmailChange}/><br />
              <input type="number" placeholder="Phone Number" onChange={handlePhoneChange}/><br />
              <input type="password" placeholder="Password" onChange={handlePasswordChange} /><br />
                <input type="password"  placeholder="Confirm Password"  onChange={handleConfirmPasswordChange}/><br/>
              <input type="file" accept="image/*"  onChange={handleProfilePictureChange} /><br/>
              <label><input type="radio" name="gender" value="female"  onChange={handleGenderChange}/>Female</label><br/>
          <label><input type="radio" name="gender" value="Male" onChange={handleGenderChange} /> Male</label><br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit"
                  style={{backgroundColor: surname==="" ||othername==="" ||username==="" ||email==="" || phone===0 || password==="" || confirmPassword==="" ||gender===""|| profilePicture===null  ? "grey" : "royal blue",
                   cursor: surname==="" ||othername==="" ||username==="" ||email==="" || phone===0 || password==="" || confirmPassword==="" ||gender===""|| profilePicture===null ? "not-allowed": "pointer",
                  }} disabled={surname === "" || othername === "" || username === "" || email === "" || phone === 0 || password === "" || confirmPassword === "" || gender === "" || profilePicture === null ? true : false}
              onClick={handleRegister}>Register</button><br />
            </form>
            <Link to="/login">Already have an account? Login here</Link>
      </div>
    </div>
  );
}

export default RegisterTiana;