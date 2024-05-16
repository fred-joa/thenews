import React from 'react';
import { getCurrentDate } from '../util/functions';

const Header = ({temp, tempMin, tempMax, icon, country}) => {
  return (
    <header id='header' className='container d-none d-md-block'>
      <div className="d-flex justify-content-between">
        <div className='align-self-center'>
            <p style={{fontSize:"14px"}} className=' my-0'> {country.name} <br/> <span className='text-muted small-text'>{getCurrentDate()}</span> </p>
        </div>
        <div >
            <h1 className='my-1 title-text'>THE NEWS</h1>
        </div>
        <div className='d-flex align-items-center ' style={{fontSize:"14px"}}>
          <img src={icon} className='icon-weather' style={{width:"25px"}} alt='icon'></img>
            <span className='small-text'>{temp}&deg;</span>
            <span className='text-muted small-text'>Min {tempMin}&deg; Max {tempMax}&deg;</span>
        </div>
      </div>

    </header>
  )
}

export default Header