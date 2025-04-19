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
import Calulator from './pages/Calulator';



function App() {
  return (
   
     
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
          <Route path='/calculator' element={<Calulator />} />
        </Routes>
        <Footer  companyName="John's Company" companyAddress="Lagos Ibadan Express"/>

      </Router>
      
  );
}

export default App;
