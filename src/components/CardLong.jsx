import React from 'react';
import image from '../assets/react.svg'

const CardLong = ({category, article, idmodal}) => {
  return (
    <div className='row'>
        <div className='col-6'>
            <img src={article.urlImage? article.urlImage : image} style={{width:"100%"}} className='card-img-left'/>
        </div>
        <div className='col-6'>
            <h5 className='text'>{article.title}</h5>
            <p style={{cursor:"pointer"}} className='fst-italic text-primary' data-bs-toggle="modal" data-bs-target={`#${idmodal}`}>Read More.</p>
        </div> 
    </div>
  )
}

export default CardLong