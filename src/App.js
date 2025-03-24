import Header from './components/Header';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Register from './pages/Register';
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';
import  {BrowserRouter as Router, Routes, Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/tunde" element={<CheckoutPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
