import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Register from './pages/Register';
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Tiana from './pages/Tiana';
import RegisterTiana from './pages/RegisterTiana';
import John from './pages/John';
import Footer from './components/Footer';
import Testing from './pages/Testing';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/tiana' element={<Tiana />} />
          <Route path='/registerTiana' element={<RegisterTiana />} />
          <Route path='/john' element={<John />} />
          <Route path='/testing' element={<Testing />} />
        </Routes>
        <Contact name="Omonola Christiana" email="christianaomonola99@gmail.com" phoneNumber="08164905260" gitHub="https://github.com/Tiaanaa" linkedIn="www.linkedin.com/in/omonolachristiana"/>
        <Footer  companyName="John's Company" companyAddress="Lagos Ibadan Express"/>

      </Router>
      
    </div>
  );
}

export default App;
