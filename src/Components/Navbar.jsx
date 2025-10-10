
import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png'

import git from '../assets/gitlogo.png'

const Navbar = () => {
  const links = <>
    <NavLink 
      to='/' 
      className={({ isActive }) => isActive ? 'm-2 text-[#9F62F2] font-semibold' : 'm-2'}
    >
      <li>Home</li>
    </NavLink>

    <NavLink 
      to='/apps' 
      className={({ isActive }) => isActive ? 'm-2 text-[#9F62F2] font-semibold' : 'm-2'}
    >
      <li>Apps</li>
    </NavLink>

    <NavLink 
      to='/installation' 
      className={({ isActive }) => isActive ? 'm-2 text-[#9F62F2] font-semibold' : 'm-2'}
    >
      <li>Installation</li>
    </NavLink>
  </>

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1280px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
      <img className='w-[20px] ' src={logo} alt="" />
        <NavLink  to='/'> 
          
          <a className=" btn-ghost text-xl text-[#9F62F2] font-bold">HERO.IO</a>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        
        <a
       
          href="https://github.com/najifjawoad"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white rounded-lg hover:bg-[#8B4FE0]"
        >
          <img className='w-[20px]' src={git} alt="" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
