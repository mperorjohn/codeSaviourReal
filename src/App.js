import Header from './components/Header';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Register from './pages/Register';
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';
import Tiana from './pages/Tiana';
import  {BrowserRouter as Router, Routes, Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/tiana' element={<Tiana />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
