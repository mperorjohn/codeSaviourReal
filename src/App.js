import Header from './components/Header';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Register from './pages/Register';
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Tiana from './pages/Tiana';
import RegisterTiana from './pages/RegisterTiana';


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

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
