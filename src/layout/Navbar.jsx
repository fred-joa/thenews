import React from 'react'
import {FaUser} from "react-icons/fa";
import { MdUnsubscribe } from "react-icons/md"; 
import { Link } from 'react-router-dom';

const Navbar = ({setCategory}) => {


  return (
    <nav className='navbar navbar-expand-md sticky-top py-2 mt-1 navbar-light bg-light'>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className="navbar-nav m-0 p-0">
            <li className="nav-item active">
              <Link to="/" className='ps-0 nav-link title-text' onClick={()=>setCategory("general")}>THE NEWS</Link>
            </li>
            <li className="nav-item ">
              <Link to="/technology" className='nav-link' onClick={()=>setCategory("technology")}>Technology</Link>
            </li>
            <li className="nav-item ">
              <Link to="/business" className='nav-link' onClick={()=>setCategory("business")}>Business</Link>
            </li>
            <li className="nav-item ">
             <Link to="/health" className='nav-link' onClick={()=>setCategory("health")}>Health</Link>
            </li>
            <li className="nav-item ">
              <Link to="/sports" className='nav-link' onClick={()=>setCategory("sports")}>Sports</Link>
            </li>
            <li className="nav-item ">
              <Link to="/entertainment" className='nav-link' onClick={()=>setCategory("entertainment")}>Entertainment</Link>
            </li>
          </ul>
        </div>
        <button className='btn p-1 '>
            <Link to="/subscribe"><MdUnsubscribe  style={{fontSize:"24px", color:"#000"}}/></Link>
          </button>
      </div>

    </nav>
  )
}

export default Navbar