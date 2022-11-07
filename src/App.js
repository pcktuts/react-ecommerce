import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
