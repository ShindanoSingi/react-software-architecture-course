import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';


function App() {

   return (
   <>
      <nav className='nav-bar'>
      <ul className='list-container'>
        <NavLink to='/' className={({isActive}) => isActive ? "is-active" : null}>
          <li className='home'>Home</li>
        </NavLink>

        <NavLink to='/about' className={({isActive}) => isActive ? "is-active" : null}>
          <li className='about'>About</li>
        </NavLink>

        <NavLink to='/articles' className={({isActive}) => isActive ? "is-active" : null}>
          <li className='articles'>Articles</li>
        </NavLink>
      </ul>

    </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='articles' element={<Articles />}/>
      </Routes>
    </>
    
   )
   ;
}

 export default App;
