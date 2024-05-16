import React from 'react';
import '../util/cards.css';
import image from '../assets/react.svg'

const CardMini = ({category, article, idmodal}) => {
  return (
    <div className='card' style={{width:"100%", height:"100%"}}>
        <img style={{ objectFit:"cover"}} className='card-img-top mcard-img' src={article.urlImage? article.urlImage:image}/>
        <div className='card-body'>
            <h5 className='card-title'>{article.title}</h5>
            <p style={{cursor:"pointer", fontSize:"14px"}} className='fst-italic text-primary' data-bs-toggle="modal" data-bs-target={`#${idmodal}`}>Read More.</p>
            <p className='card-text'> <small className='text-muted'>{article.publishedAt}</small></p>
        </div>
    </div>
  )
}

export default CardMini

//