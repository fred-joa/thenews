import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Subscribe = () => {
const data = useState({name:null, email:null})
const navigate = useNavigate();

const handleSubmit = (e)=>{
    navigate("/info");
}

  return (
    <div className='container' style={{height:"60vh"}}>
      <form className='my-4 mx-auto' style={{maxWidth:"400px"}} onSubmit={handleSubmit}>
        <div className=' my-4 text-center'>
          <h4 className='text-primary'>Subscribe to "The News"</h4>
          <p>Free Subscription</p>
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" required/>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="terms-cond" required />
          <label className="form-check-label" for="terms-cond"> I agree to the <Link to="/terms-and-conditions" className='text-info'>Terms and Conditions</Link> </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Subscribe