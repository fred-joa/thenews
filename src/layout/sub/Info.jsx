import React from 'react';
import { GiConfirmed } from "react-icons/gi";

const Info = () => {
  return (
    <div className='container position-relative' style={{height:"95vh"}}>
      <div className='position-absolute start-50 translate-middle' style={{top:"30%"}}>
        <div className='text-center'><GiConfirmed style={{fontSize:"80px"}}/></div>
        <h2 className='text-primary text-center'>Thank You for Subcribing!</h2>
        <p>Your subscription has been confirmed </p>
        <p>You are now subscribed to our newsletter! You will hear from us shortly</p>
      </div>

    </div>
  )
}

export default Info