import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';


function App() {
  return (
    <div>
      <nav>
      <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="About">About</Link>
          </li>
      </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
