import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';


function App() {
  return (
    <>
      <nav className='nav-bar'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Articles</li>
      </ul>
    </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='articles' element={<Articles />}/>
      </Routes>
    </>
  );
}

export default App;
