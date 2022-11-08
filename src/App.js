import './App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
function App() {
  return (
    <Router>
            <Routes>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/" element={<HomePage/>} />
            </Routes>
    </Router> 
  );
}

export default App;
