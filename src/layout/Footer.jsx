import React from 'react';
import { Link } from 'react-router-dom';
import { CiYoutube, CiInstagram, CiLinkedin, CiFacebook } from "react-icons/ci";



const Footer = ({setCategory}) => {
  return (
    <footer className='bg-dark '>
      <div className='container pt-4 pb-2'>
        <div className='row'>
          <div className="col-6 col-md-3">
            <h6 className="text-light">Content</h6>
            <ul className="">
              <li className=""><Link to="/technology" onClick={()=>setCategory("technology")}>Technology</Link></li>
              <li className=""><Link to="/business" onClick={()=>setCategory("business")}>Business</Link></li>
              <li className=""><Link to="/health" onClick={()=>setCategory("health")}>Health</Link></li>
              <li className=""><Link to="/sports"  onClick={()=>setCategory("sports")}>Sports</Link></li>
              <li className=""><Link to="/entertainment" onClick={()=>setCategory("entertainment")}>Entertainment</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="text-light">Help</h6>
          <ul className="">
              <li className=""><Link to="/terms-and-conditions">Terms & Conditions</Link> </li>
              <li className=""><Link to="/contact">Contact</Link> </li>
              <li className="">Privacy Policy</li>
              <li className="">Health</li>
              <li className="">Cookie Policy</li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="text-light">Information</h6>
          <ul className="">
              <li className="">About The News</li>
              <li className="">The News Licence</li>
              <li className="">Privacy Policy</li>
              <li className="">Advertise with The News</li>
              <li className="">Vacancies</li>
            </ul>
          </div>
          <div className="col-4 col-md-3">
            <h6 className="text-light text-end">Follow The News</h6>
          <ul className="text-end">
              <li className=""><CiYoutube style={{fontSize:"16px"}}/></li>
              <li className=""><CiInstagram/> </li>
              <li className=""><CiLinkedin/></li>
              <li className=""><CiFacebook/></li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-light text-center" style={{fontSize:"12px"}}>Copyright © 2024 The News</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer